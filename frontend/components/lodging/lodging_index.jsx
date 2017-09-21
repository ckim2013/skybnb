import React from 'react';
import LodgingIndexItem from './lodging_index_item';
// import Slider from 'react-slick';


class LodgingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchLodgings();
  }

  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <h2>List of all the houses!</h2>
        <div className='lodging-index'>
          {this.props.lodgings.map(lodging =>
            <LodgingIndexItem key={lodging.id} lodging={lodging} />)}
        </div>
      </div>
    );
  }
}

export default LodgingIndex;
