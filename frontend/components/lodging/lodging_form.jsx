import React from 'react';
import { Link } from 'react-router-dom';

class LodgingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.lodging;
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log('-------------------');
    // console.log('inside constructor');
    // console.log('props:constructor', this.props);
    // console.log('state:constructor', this.state);
    // console.log('-------------------');
  }

  componentWillMount() {
    // console.log('-------------------');
    // console.log('inside willMount');
    // console.log('props:WillMount', this.props);
    // console.log('state:WillMount', this.state);
    // console.log('-------------------');
    if (this.props.formType === 'Edit') {
      console.log('component will mount in form');
      this.props.fetchLodging(this.props.match.params.lodgingId)
      .then(() => this.setState(this.props.lodging));
    }
  }

  componentWillUnmount() {
    console.log('inside component will UNMOUNT');
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('before edit submit', this.state);
    this.props.action(this.state)
    .then(this.props.history.push(`/lodgings/${this.state.id}`));
  }

  componentWillReceiveProps(newProps) {
    console.log('-------------------');
    console.log('inside ReceiveProps');
    console.log('props:ReceiveProps', this.props);
    console.log('state:ReceiveProps', this.state);
    console.log('newProps:ReceiveProps', newProps);
    console.log('-------------------');
    // if (newProps.formType === 'Edit' &&
    //     this.props.match.params.lodgingId !==
    //     newProps.match.params.lodgingId) {
    //       console.log('inside if statement in receiveprops');
    //       this.setState(newProps.lodging);
    //       newProps.fetchLodging(newProps.match.params.lodgingId);
    //     }
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
    console.log(newArray);
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
    console.log('form render state', this.state);
    console.log('form render amenities', this.state ? this.state.amenities : 'state is null');
    // console.log('-------------------');
    // console.log('inside Render');
    // // console.log('props:render', this.props);
    // console.log('state:render', this.state);
    // console.log('-------------------');
    if (this.state === null || this.state.amenities === undefined) {
      console.log("Loading");
      return (
        <div className='lodging-form'>Loading</div>
      );
    }

    const { id, title, bio, street, city, country, rate, beds, bedrooms,
            bathrooms, guests, amenities, room_type, check_in } = this.state;

    return (
      <div className='lodging-form-container'>
        <h1>
          { this.props.formType } this lodging!
        </h1>

        <ul>
          { this.props.errors.map((error, i) => <li key={ i }>{ error }</li>)}
        </ul>

        <form className='lodging-form' onSubmit={ this.handleSubmit }>
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
