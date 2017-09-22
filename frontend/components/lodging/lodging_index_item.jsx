import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const LodgingIndexItem = ({ lodging }) => {
  return (
    <Link to={`/lodgings/${lodging.id}`}>
      <div className='lodging-index-item'>
        <Image publicId={lodging.image_url} cloudName="skybnb" >
          <Transformation height="275" width="350" crop="scale" />
        </Image>
        <ul>
          <li>${lodging.rate} per night</li>
          <li>{lodging.title}</li>
          <li>{lodging.city}</li>
          <li>{lodging.country}</li>
          <li>{lodging.room_type}</li>
          <li>{lodging.beds} bed(s)</li>
        </ul>
      </div>
  </Link>
  );
};

export default LodgingIndexItem;
