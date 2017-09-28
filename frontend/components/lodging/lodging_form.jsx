import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'aqzdi9yx';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/skybnb/upload';


class LodgingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.lodging;
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  componentWillMount() {
    if (this.props.formType === 'Edit') {
      this.props.fetchLodging(this.props.match.params.lodgingId)
      .then(() => this.setState(this.props.lodging));
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const geocoder = new google.maps.Geocoder();
    const address = this.state.street + ', ' + this.state.city + ', ' +
                  this.state.country;

    if (this.state.street === '' || this.state.city === '' ||
        this.state.country === '') {
          this.props.action(this.state);
        }

    geocoder.geocode({ address }, data => {
      const lat = data[0].geometry.location.lat();
      const lng = data[0].geometry.location.lng();
      this.setState({ lat, lng }, () => {
        this.props.action(this.state)
        .then(resp => this.props.history.push(`/lodgings/${resp.lodging.lodging_detail.id}`));
      });
    });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((error, response) => {
      if (error) {
        console.error(error);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url,
          uploadedFile: null
        });
      }
    });
  }

  componentWillReceiveProps(newProps) {
    // REVISIT
    // It's not rendering all of the correct information when
    // you move to a new edit page via url
    if (newProps.formType === 'Edit') {
      if (this.props.match.params.lodgingId !==
          newProps.match.params.lodgingId) {
            this.props.fetchLodging(newProps.match.params.lodgingId)
            .then((resp) => this.setState(resp.lodging));
          }
    } else if (this.props.formType === 'Edit' &&
               newProps.formType === 'Create') {
      // 'Needs to turn into new form'
    }
  }

  handleCheckbox(e) {
    const newArray = this.state.amenities.slice();
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      if (!newArray.includes(value)) {
        newArray.push(value);
      }
    } else {
      const idx = newArray.indexOf(value);
      if (idx > -1) {
        newArray.splice(idx, 1);
      }
    }
    this.setState({amenities: newArray});
  }

  update(field) {
    return e => {
      let value = e.target.value;
      if (['beds', 'bedrooms', 'guests', 'rate', 'bathrooms'].includes(field)) {
        value = parseInt(value);
      }
      this.setState({ [field]: value });
    };
  }

  render() {
    if (this.state === null || this.state.amenities === undefined) {
      return (
        <div className='lodging-form'>Loading</div>
      );
    }

    const { id, title, bio, street, city, country, rate, beds, bedrooms,
            bathrooms, guests, amenities, room_type, check_in,
            district } = this.state;

    return (
      <div className='lodging-form-container'>
        <h1>
          { this.props.formType } this lodging!
        </h1>

        <ul>
          { this.props.errors.map((error, i) => <li key={ i }>{ error }</li>)}
        </ul>


        <form className='lodging-form' onSubmit={ this.handleSubmit }>
          <h2>Upload an image</h2>
          <div>
            <div>
              {this.state.image_url === '' ? null :
                <div className='lodging-form-image-container'>
                  <p>{ this.state.image_url }</p>
                  <Image publicId={ this.state.image_url }
                    cloudName='skybnb'>
                    <Transformation width='800' height='600' crop='scale' />
                  </Image>
                </div>
              }
            </div>
            <Dropzone multiple={ false }
              accept='image/*'
              onDrop={ this.onImageDrop }
              className='lodging-image-dropbox'>
              <p>Drop an image or click to select a file to upload</p>
            </Dropzone>
          </div>

          <h2>Introductions</h2>
          <div className='lodging-form-title'>
            <div>
              <label >Title</label>
              <input onChange={ this.update('title') }
                     className='lodging-title'
                     placeholder='Title'
                     type='text'
                     maxLength='32'
                     value={ title }/>
            </div>

            <div>
              <label>About me</label>
              <br />
              <textarea onChange={ this.update('bio') }
                        placeholder='Bio'
                        defaultValue={ bio }></textarea>
            </div>
          </div>

          <h2>Address</h2>
          <div className='lodging-form-address'>
            <div>
              <label>Street</label>
              <input onChange={ this.update('street') }
                     placeholder='Street'
                     type='text'
                     value={ street }/>
            </div>

            <div>
              <label>City</label>
              <input onChange={ this.update('city') }
                     placeholder='City'
                     type='text'
                     value={ city }/>
            </div>

            <div>
              <label>Country</label>
              <input onChange={ this.update('country') }
                     placeholder='Country'
                     type='text'
                     value={ country }/>
            </div>

            <div>
              <label>District</label>
              <select defaultValue={ district ? district : 'Please Select' }
                      onChange={ this.update('district') }>
                <option disabled>Please Select</option>
                <option value='Northwest'>Northwest</option>
                <option value='Central West'>Central West</option>
                <option value='Southwest'>Southwest</option>
                <option value='Twin Peaks West'>Twin Peaks West</option>
                <option value='Central'>Central</option>
                <option value='Central North'>Central North</option>
                <option value='North'>North</option>
                <option value='Northeast'>Northeast</option>
                <option value='Central East'>Central East</option>
                <option value='Southeast'>Southeast</option>
              </select>
            </div>
          </div>

          <h2>Costs</h2>
          <div className='lodging-form-rate'>
            <div>
              <label>Price per night ($)</label>
                <input onChange={ this.update('rate') }
                       placeholder='Rate'
                       type='number'
                       min='1'
                       value={ rate }/>
            </div>
          </div>

          <h2>Features</h2>
          <div className='lodging-form-attributes'>
            <div>
              <label>Lodging Type</label>
              <select defaultValue={ room_type ? room_type : 'Please Select' }
                      onChange={ this.update('room_type') }>
                <option disabled>Please Select</option>
                <option value='Private Room'>Private Room</option>
                <option value='Shared Room'>Shared Room</option>
                <option value='Entire House'>Entire House</option>
              </select>
            </div>

            <div>
              <label>Check In</label>
              <input onChange={ this.update('check_in') }
                placeholder='Check In'
                type='text'
                value={ check_in }/>
            </div>

            <div>
              <label>Beds</label>
                <input onChange={ this.update('beds') }
                       placeholder='Beds'
                       type='number'
                       min='1'
                       value={ beds }/>
            </div>

            <div>
              <label>Bedrooms</label>
                <input onChange={ this.update('bedrooms') }
                       placeholder='Bedrooms'
                       type='number'
                       min='1'
                       value={ bedrooms }/>
            </div>
            <div>
              <label>Bathrooms</label>
                <input onChange={ this.update('bathrooms') }
                       placeholder='Bathrooms'
                       type='number'
                       min='1'
                       value={ bathrooms }/>
            </div>
            <div>
              <label>Guests</label>
                <input onChange={ this.update('guests') }
                       placeholder='Guests'
                       type='number'
                       min='1'
                       value={ guests }/>
            </div>
          </div>

          <h2>Amenities</h2>
          <div className='lodging-form-amenities'>
            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Smoking Allowed'
                checked={ amenities.includes('Smoking Allowed') }/>
              <label>Smoking Allowed</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Children Allowed'
                checked={ amenities.includes('Children Allowed') }/>
              <label>Children Allowed</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Kitchen'
                checked={ amenities.includes('Kitchen') }/>
              <label>Kitchen</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Patio'
                checked={ amenities.includes('Patio') }/>
              <label>Patio</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Pool'
                checked={ amenities.includes('Pool') }/>
              <label>Pool</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Air Conditioning'
                checked={ amenities.includes('Air Conditioning') }/>
              <label>Air Conditioning</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Wifi'
                checked={ amenities.includes('Wifi') }/>
              <label>Wifi</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Breakfast'
                checked={ amenities.includes('Breakfast')}/>
              <label>Breakfast</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Wheelchair accessible'
                checked={ amenities.includes('Wheelchair accessible') }/>
              <label>Wheelchair accessible</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Game console'
                checked={ amenities.includes('Game console') }/>
              <label>Game console</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Iron'
                checked={ amenities.includes('Iron') }/>
              <label>Iron</label>
            </div>

            <div>
              <input onChange={ this.handleCheckbox }
                type='checkbox'
                value='Hot Tub'
                checked={ amenities.includes('Hot Tub') }/>
              <label>Hot Tub</label>
            </div>
          </div>
          <input className='button' type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default LodgingForm;
