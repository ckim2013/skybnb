import React from 'react';
import LodgingIndex from '../lodging/lodging_index';
import LodgingMap from '../lodging_map/lodging_map';
import NavBarContainer from '../navbar/navbar_container';

const Search = (props) => {
  return (
    <div className='explore-container'>
      <NavBarContainer />
      <div className='root-page'>
        <div className='index-map-container'>
          <LodgingIndex lodgings={ props.lodgings }/>
          <div className='map-container'>
            <LodgingMap lodgings={ props.lodgings }
              updateBounds={ props.updateBounds }
              history={ props.history }/>
          </div>
          </div>
          <footer className='resume-footer'>
            <div>
              <a href='https://github.com/ckim2013'
                target='_blank'>&#xf09b;</a>
            </div>
            <div>
              <a href='https://linkedin.com/in/chris-y-kim'
                  target='_blank'>&#xf08c;</a>
            </div>
          </footer>
      </div>
    </div>
  );
};

export default Search;
