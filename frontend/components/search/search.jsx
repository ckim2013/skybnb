import React from 'react';
import LodgingIndex from '../lodging/lodging_index';
import LodgingMap from '../lodging_map/lodging_map';

const Search = (props) => {
  return (
    <div>
      <LodgingIndex lodgings={ props.lodgings }/>
      <LodgingMap lodgings={ props.lodgings }
                  updateBounds={ props.updateBounds }/>
    </div>
  );
};

export default Search;
