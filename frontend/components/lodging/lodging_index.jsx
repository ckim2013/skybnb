import React from 'react';
import LodgingIndexItem from './lodging_index_item';
import LodgingMap from '../lodging_map/lodging_map';

class LodgingIndex extends React.Component {
  componentWillMount() {
    this.props.fetchLodgings();
  }

  render() {
    const { lodgings, loading, updateBounds, fetchLodgings } = this.props;

    if (loading) {
      return <div>Loading!</div>;
    }

    return (
      <div>
        <div className='main'>
          <div className='lodging-index'>
            { lodgings.map(lodging =>
              <LodgingIndexItem key={ lodging.id } lodging={ lodging } />) }
          </div>
          <div className='map-container'>
            <LodgingMap lodgings={ lodgings }
                        updateBounds={ updateBounds }
                        fetchLodgings={ fetchLodgings }/>
          </div>
        </div>
      </div>
    );
  }
}

export default LodgingIndex;
