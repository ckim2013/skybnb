import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';

class LodgingShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchLodging(this.props.match.params.lodgingId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.lodgingId !==
        newProps.match.params.lodgingId) {
          this.props.fetchLodging(newProps.match.params.lodgingId);
        }
  }

  handleDelete(e) {
    this.props.destroyLodging(this.props.match.params.lodgingId)
    .then(() => this.props.history.push('/'));
  }

  render() {
    const { lodging, loading, loggedIn, currentUser } = this.props;

    if (loading) {
      return (
        <h2>LOADING</h2>
      );
    }

    if (lodging === undefined) return null;

    const { title, street, city, country, owner, room_type, guests,
          bedrooms, beds, bio, bathrooms, check_in, amenities, rate,
          image_url, id } = lodging;

    let loggedInButtons = <div></div>;

    if (loggedIn) {
      if (currentUser.id === owner.id) {
        loggedInButtons = (
          <div className='logged-in-buttons-container'>
            <Link to={`${id}/edit`}
                  className='edit-button button'>Edit Lodging</Link>
            <button className='delete-button button'
                    onClick={this.handleDelete}>Delete</button>
          </div>
        );
      }
    }

    return (
      <div className="lodging-show-container">
        <div className='lodging-image-edit'>
          <Image publicId={ image_url } cloudName="skybnb" >
            <Transformation width="1680" height="1000" crop="scale" />
          </Image>
          { loggedInButtons }
        </div>
        <div className='lodging-profile-container'>

          <div className='lodging-profile'>

            <h1>{ title }</h1>
            <div className='lodging-profile-intro'>
              <div>
                <span>{ street }, { city }, { country }</span>
                <div>
                  <p>{owner.first_name}</p>
                  <Link to={ `/users/${owner.id}` }>
                    <Image publicId={ owner.image_url } cloudName="skybnb">
                      <Transformation height="80" width="80" crop="thumb" />
                    </Image>
                  </Link>
                </div>
              </div>
            </div>

            <div className='lodging-profile-icons'>
              <ul>
                <li>
                  <i className="fa fa-home" aria-hidden="true"></i>
                  <h2>{ room_type }</h2>
                </li>
                <li>
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <h2>{ guests } guest(s)</h2>
                </li>
                <li>
                  <i className="fa fa-building" aria-hidden="true"></i>
                  <h2>{ bedrooms } bedroom(s)</h2>
                </li>
                <li>
                  <i className="fa fa-bed" aria-hidden="true"></i>
                  <h2>{ beds } bed(s)</h2>
                </li>
              </ul>
            </div>

            <div className='lodging-profile-bio'>
              <h2>About me</h2>
              <p>{ bio }</p>
            </div>

            <div className='lodging-profile-space'>
              <h2>Space</h2>
              <ul>
                <li>
                  Bathrooms: { bathrooms }
                </li>
                <li>
                  Bedrooms: { bedrooms }
                </li>
                <li>
                  Beds: { beds }
                </li>
                <li>
                  Check In: { check_in }
                </li>
              </ul>
            </div>

            <div className='lodging-profile-amenities'>
              <h2>Amenities</h2>
              <ul>
                { amenities.map((amenity, i) => {
                  return <li key={ amenity + i }>{ amenity }</li>;
                })}
              </ul>
            </div>

            <div className='lodging-profile-pricing'>
              <h2>Pricing</h2>
              <p>${ rate } per night! So cheap!</p>
            </div>

            <div className='lodging-profile-cancellation'>
              <h2>Cancellation (Try not to!)</h2>
              <p>
                Cancel up to 5 days before check in and get a full refund
                (minus service fees). Cancel within 5 days of your trip and
                the first night is non-refundable, but 50% of the cost for
                the remaining nights will be refunded. Service fees are
                refunded when cancellation happens before check in and within
                48 hours of booking.
              </p>
            </div>

            <div className='lodging-profile-reviews'>
              <h2>Reviews</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default LodgingShow;
