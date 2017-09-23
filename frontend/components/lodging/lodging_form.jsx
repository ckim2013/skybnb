import React from 'react';

class LodgingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.lodging;
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
        rate: 0,
        room_type: '',
        beds: 0,
        bedrooms: 0,
        bathrooms: 0,
        guests: 0,
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


  render() {

    if (this.state === null ) {
      return (
        <div className='lodging-form'>Loading</div>
      );
    }
    return (
      <div className='lodging-form'>
        {this.props.formType} a lodging!

        <form>
          <input placeholder='title' type='text' value={this.state.title}/>

        </form>
      </div>
    );
  }
}

export default LodgingForm;
