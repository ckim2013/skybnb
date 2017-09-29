import React from 'react';
import ReactStars from 'react-stars';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lodging_id: this.props.match.params.lodgingId,
      title: '',
      body: '',
      rating: 0
    };
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value});
    };
  }

  handleRating(value) {
    this.setState({ rating: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state)
    .then(() => this.props.fetchLodging(this.props.match.params.lodgingId));
  }

  render() {
    const { loggedIn } = this.props;

    if (!loggedIn) {
      return (
        <div className='review-form'>
          <h2>
            Please login to review a lodging!
          </h2>
        </div>
      );
    }

    return (
      <div>
        <h2>Write a review!</h2>
        <ul>
          { this.props.errors.map((error, i) => <li key={ i }>{ error }</li>)}
        </ul>
        <form className='review-form'
              onSubmit={ this.handleSubmit }>

          <div className='review-form-rating'>
            <label>Rating</label>
            <ReactStars count={ 5 }
                        half={ false }
                        color2='#FC3468'
                        onChange={ this.handleRating }
                        value={ this.state.rating }
                        size={ 20 }
                        />
          </div>

          <div className='review-form-title'>
            <label>Title</label>
            <input type='text'
                   onChange={ this.update('title') }
                   value={ this.state.title }/>
          </div>

          <div className='review-form-body'>
            <label>Body</label>
            <textarea onChange={ this.update('body') }
                      value= { this.state.body }>
            </textarea>
          </div>

          <div>
            <input className='button'
                   type='submit'
                   value='Submit'/>
          </div>
        </form>
      </div>
    );
  }


}

export default ReviewForm;
