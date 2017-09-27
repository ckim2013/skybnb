import React from 'react';
import LodgingIndex from '../lodging/lodging_index';
import LodgingMap from '../lodging_map/lodging_map';

const Search = (props) => {
  return (
    <div>
      <LodgingIndex lodgings={ props.lodgings }
                    loading={ props.loading }
                    fetchLodgings={ props.fetchLodgings }
                    loading={ props.loading }/>
    </div>
  );
};

// <LodgingMap lodgings={ props.lodgings }/>
export default Search;
