import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css' from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('form construc props', props);
    this.state = { start_date: '', end_date: '', lodging_id: this.props.match.params.lodgingId};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.forceUpdate();
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  componentWillUnmount() {
    console.log('booking form unmounting');
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('before submit', this.state);
    this.props.makeBooking(this.state)
    .then((response) => console.log('response is', response));
  }

  render() {

    console.log(this.state);
    if (!this.props.loggedIn) {
      return (
        <div>Denied</div>
      );
    }

    return (
      <div className='booking-form-container'>
        <div>
          <h2>Starting from ${this.props.rate}</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Start Date</label>
            <input type='date'
              placeholder='Start Date'
              onChange={this.update('start_date')}/>
          </div>
          <div>
            <label>End Date</label>
            <input type='date'
              placeholder='End Date'
              onChange={this.update('end_date')}/>
          </div>

          <input className='button'
                 type='submit'
                 value='Submit'/>
        </form>
      </div>
    );
  }
}

export default BookingForm;
