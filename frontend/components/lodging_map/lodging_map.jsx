import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 13
};

class LodgingMap extends React.Component {
  constructor(props) {
    super(props);
    console.log('props inside map', props);
  }

  componentDidMount() {
    console.log('component mounted');
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.registerListeners();
    // Might not need below
    this.MarkerManager.updateMarkers(this.props.lodgings);
    console.log('did mount did its thangg');
  }

  componentDidUpdate() {
    console.log('receive props', this.props);
    this.MarkerManager.updateMarkers(this.props.lodgings);
  }

  registerListeners() {
    console.log('start registerListeners');
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateBounds(bounds);
    });

    // google.maps.event.addListener(this.map, 'click', event => {
    //   const coords = getCoordsObj(event.latLng);
    //   console.log('click listener');
    // });
    // console.log('end registerListeners');
  }

  render() {
    return (
      <div>
        <div id='map-container' ref={ map => { this.mapNode = map; } }></div>
      </div>
    );
  }
}

export default LodgingMap;
