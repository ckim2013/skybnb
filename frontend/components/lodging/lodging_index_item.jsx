import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import ReactStars from 'react-stars';

const LodgingIndexItem = ({ lodging }) => {
  let bedS = 'bed';
  if (lodging.beds > 1) {
    bedS = 'beds'
  }
  return (
    <Link to={`/lodgings/${lodging.id}`}>
      <div className='lodging-index-item'>
        <Image publicId={lodging.image_url} cloudName="skybnb" >
          <Transformation height="275" width="350" crop="scale" />
        </Image>
        <ul>
          <li>{lodging.title}</li>
          <li>${lodging.rate} per night</li>
          <li>{lodging.city}</li>
          <li>{lodging.country}</li>
          <li>{lodging.room_type}</li>
          <li>{lodging.beds} { bedS }</li>
        </ul>
        <ReactStars count={ 5 }
          value={ lodging.average_rating }
          edit={ false }
          color2='#FC3468'
          size={ 20 }/>
      </div>
  </Link>
  );
};

export default LodgingIndexItem;
