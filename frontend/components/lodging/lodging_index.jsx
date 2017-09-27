import React from 'react';
import LodgingIndexItem from './lodging_index_item';
import LodgingMap from '../lodging_map/lodging_map';

const LODGING_INDEX_GREETING =
'Home ~ 집 ~ casa ~ 家 ~ الصفحة الرئيسية ~ guriga ~ บ้าน ~ zuhause ~ ਘਰ ~ nyumbani ~ Главная ~ rumah ~ shtëpi'

class LodgingIndex extends React.Component {
  componentWillMount() {
    this.props.fetchLodgings();
  }

  render() {
    const { lodgings, loading } = this.props;

    if (loading) {
      return <div>Loading!</div>;
    }

    return (
      <div>
        <h2 className='lodging-index-header'>{ LODGING_INDEX_GREETING }</h2>
        <div className='main'>
          <div className='lodging-index'>
            { lodgings.map(lodging =>
              <LodgingIndexItem key={ lodging.id } lodging={ lodging } />) }
          </div>
          <div>
            <LodgingMap lodgings={ lodgings }/>
          </div>
        </div>
      </div>
    );
  }
}

export default LodgingIndex;
