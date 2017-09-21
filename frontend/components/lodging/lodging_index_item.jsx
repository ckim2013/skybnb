import React from 'react';
import { Link } from 'react-router-dom';

const LodgingIndexItem = ({ lodging }) => {
  return (
    <Link to={`/lodgings/${lodging.id}`}>
      <div className='lodging-index-item'>
        <img src={lodging.image_url} />
        <ul>
            <li>${lodging.rate} per night</li>
            <li>⸰ {lodging.title}</li>
            <li>⸰ {lodging.city}</li>
            <li>⸰ {lodging.country}</li>
            <li>{lodging.room_type}</li>
            <li>⸰ {lodging.beds} bed(s)</li>
        </ul>
      </div>
  </Link>
  );
};

export default LodgingIndexItem;
