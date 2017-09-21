import React from 'react';
import LodgingIndexItem from './lodging_index_item';

class LodgingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchLodgings();
  }

  render() {
    return (
      <div>
        <h2>List of all the houses!</h2>
        <ul>
          {this.props.lodgings.map(lodging =>
            <LodgingIndexItem lodging={lodging} />)}
        </ul>
      </div>
    );
  }
}

export default LodgingIndex;
