import React from 'react';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start_date: '',
                   end_date: '',
                   lodging_id: this.props.match.params.lodgingId,
                   success_message: []};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ start_date: '',
                   end_date: '',
                   lodging_id: newProps.match.params.lodgingId,
                   success_message: []});
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeBooking(this.state)
    .then(() => {
      this.setState(
        { start_date: '',
          end_date: '',
          success_message: ['You successfully made a booking!']
        }
      );
    }
  );
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <div>Please sign in to book!</div>
      );
    }

    return (
      <div className='booking-form-container'>
        <div>
          <h1>Book this place!</h1>
        </div>
        <div>
          <h2>Starting from ${this.props.rate}</h2>
        </div>
        <div>
          <ul>
            {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
          {this.state.success_message}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='start-date-container'>

            <label>Start Date</label>
            <input type='date'
              placeholder='Start Date'
              value={this.state.start_date}
              onChange={this.update('start_date')}/>

          </div>
          <div className='end-date-container'>

            <label>End Date</label>
            <input type='date'
              placeholder='End Date'
              value={this.state.end_date}
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
