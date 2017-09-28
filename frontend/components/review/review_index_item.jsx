import React from 'react';
import { Image, Transformation} from 'cloudinary-react';

const ReviewIndexItem = ({ review }) => {
  console.log(review);
  const { title, body, rating, author } = review;
  const { first_name, last_name, image_url } = author;

  return (
    <div>
      <div className='review-line-one'>

      </div>
      <div>
        { title }
      </div>
      <div>
        <p>{ body }</p>
      </div>
      <div>
        <Image publicId={ image_url } cloudName="skybnb">
          <Transformation height="40" width="40" crop="thumb" />
        </Image>
      </div>
    </div>
  );
};

export default ReviewIndexItem;
