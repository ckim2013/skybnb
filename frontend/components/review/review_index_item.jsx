import React from 'react';
import ReactStars from 'react-stars';
import { Image, Transformation} from 'cloudinary-react';

const ReviewItem = ({ review }) => {
  const { title, body, rating, author } = review;
  const { first_name, last_name, image_url } = author;

  return (
    <li className='review-item-container'>
      <div className='review-line-one'>

        <div>
          <Image publicId={ image_url } cloudName="skybnb">
            <Transformation height="40" width="40" crop="thumb" />
          </Image>
        </div>

        <div>
          <h3>{ last_name }, { first_name }</h3>
        </div>

        <div>
          <ReactStars count={ 5 }
            half={ true }
            edit={ false }
            color2='#FC3468'
            value={ rating }/>
        </div>

      </div>

      <div className='review-line-two'>
        <div>
          <h4>{ title }</h4>
        </div>
        <div>
          <p>{ body }</p>
        </div>
      </div>
      
    </li>
  );
};

export default ReviewItem;
