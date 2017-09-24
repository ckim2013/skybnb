import React from 'react';
import LodgingIndexItem from './lodging_index_item';

const LODGING_INDEX_GREETING = 'Home ~ 집 ~ casa ~ 家 ~ الصفحة الرئيسية ~ guriga ~ บ้าน ~ zuhause ~ ਘਰ ~ nyumbani ~ Главная ~ rumah ~ shtëpi'

class LodgingIndex extends React.Component {
  componentWillMount() {
    this.props.fetchLodgings();
  }

  render() {
    const { lodgings, loading } = this.props;
    if (loading) {
      console.log('loading inside index');
      return <div>Loading!</div>;
    }

    return (
      <div className='main'>
        <h2 className='lodging-index-header'>{LODGING_INDEX_GREETING}</h2>
        <div className='lodging-index'>
          {this.props.lodgings.map(lodging =>
            <LodgingIndexItem key={lodging.id} lodging={lodging} />)}
        </div>
      </div>
    );
  }
}

export default LodgingIndex;
