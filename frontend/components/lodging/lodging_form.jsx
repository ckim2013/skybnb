import React from 'react';
import merge from 'lodash/merge'

class LodgingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.lodging;
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  componentWillMount() {
    if (this.props.formType === 'Edit' && this.props.lodging === undefined) {
      this.props.fetchLodging(this.props.match.params.lodgingId)
      .then(() => this.setState(this.props.lodging));
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType === 'Edit'
        && newProps.formType === 'Create') {
          console.log('edit to create');
      this.setState({
        title: '',
        street: '',
        city: '',
        country: '',
        image_url: '',
        rate: 1,
        room_type: '',
        beds: 1,
        bedrooms: 1,
        bathrooms: 1,
        guests: 1,
        check_in: '',
        amenities: [],
        bio: ''
      });
    } else if (this.props.formType === 'Create'
               && newProps.formType === 'Edit') {
                 console.log('create to edit');
      this.props.fetchLodging(newProps.match.params.lodgingId);
    } else if (this.props.formType === 'Edit'
               && this.props.match.params.lodgingId
               !== newProps.match.params.lodgingId) {
                 console.log('edit but different place');
                 console.log(newProps.match.params.lodgingId);
                 this.props.fetchLodging(newProps.match.params.lodgingId);
               }
  }

  handleCheckbox(e) {
    const newArray = this.state.amenities.slice();
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      newArray.push(value);
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
    console.log(this.state);
    if (this.state === null ) {
      return (
        <div className='lodging-form'>Loading</div>
      );
    }

    const { title, bio, street, city, country, rate, beds, bedrooms,
            bathrooms, guests, amenities } = this.state;

    return (
      <div className='lodging-form-container'>
        <h1>{ this.props.formType } a lodging!</h1>
        <form className='lodging-form'>
          <h2>Introductions</h2>
          <div className='lodging-form-title'>
            <div>
              <label >Title</label>
              <input onChange={ this.update('title') }
                     className='lodging-title'
                     placeholder='Title'
                     type='text'
                     value={ title }/>
            </div>

            <div>
              <label>About me</label>
              <br />
              <textarea onChange={ this.update('bio') }
                        placeholder='Bio'>{ bio }</textarea>
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
                value='Game Console'
                checked={ amenities.includes('Game Console') }/>
              <label>Game Console</label>
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

        </form>
      </div>
    );
  }
}

export default LodgingForm;
