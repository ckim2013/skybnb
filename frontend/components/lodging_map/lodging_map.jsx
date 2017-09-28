import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 13
};

class LodgingMap extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.listener = this.registerListeners();
    // Might not need below
    // this.MarkerManager.updateMarkers(this.props.lodgings);
  }

  componentDidUpdate() {
    console.log('updating');
    this.MarkerManager.updateMarkers(this.props.lodgings);
  }

  componentWillUnmount() {
    google.maps.event.removeListener(this.listener);
  }

  registerListeners() {
    return google.maps.event.addListener(this.map, 'idle', () => {
      console.log(this.map);
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateBounds(bounds);
    });
  }

  handleMarkerClick(lodging) {
    this.props.history.push(`/lodgings/${lodging.id}`);
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
