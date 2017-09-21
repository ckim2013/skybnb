import React from 'react';
import { Link } from 'react-router-dom';

const LodgingIndexItem = ({ lodging }) => {
  return (
    <Link to={`/lodgings/${lodging.id}`}>
      <li className='lodging-index-item'>
        <ul>
            <img src={lodging.image_url} />
            <li>{lodging.rate}</li>
            <li>{lodging.title}</li>
            <li>{lodging.city}</li>
            <li>{lodging.country}</li>
            <li>{lodging.room_type}</li>
            <li>{lodging.beds}</li>
        </ul>
      </li>
  </Link>
  );
};

export default LodgingIndexItem;
