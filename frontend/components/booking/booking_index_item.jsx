import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const BookingIndexItem = ({ booking, destroyBooking }) => {
  const { duration_of_stay, start_date, end_date, lodging,
          total_cost } = booking;

  const { title, street, city, country, guests, beds,
          image_url, rate, id } = lodging;


  return (
    <div className='booking-index-item'>
      <Link to={`lodgings/${id}`}>
      <Image publicId={ image_url } cloudName='skybnb'>
        <Transformation height='275' width='350' crop='scale' />
      </Image>
    </Link>
      <ul>
        <li>{ title }</li>
        <li>{ street }, { city }, { country }</li>
        <li>{ guests } guests allowed</li>
        <li>From { start_date } to { end_date }</li>
        <li>{ duration_of_stay } days of adventure!</li>
        <li>${ rate } x { duration_of_stay } = ${ total_cost } due</li>
      </ul>
    </div>
  );
};

export default BookingIndexItem;
