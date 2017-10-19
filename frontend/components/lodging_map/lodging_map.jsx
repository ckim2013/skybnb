import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 37.76990128158148,
    lng: -122.44434326464842
  },
  zoom: 13
};

class LodgingMap extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.listener = this.registerListeners();
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.lodgings);
  }

  componentWillUnmount() {
    // This is to prevent the show page from breaking when
    // toggling the window console
    google.maps.event.removeListener(this.listener);
  }

  registerListeners() {
    return google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: {lat: south, lng: west }
      };
      this.props.updateBounds(bounds);
    });
  }

  handleMarkerClick(lodging) {
    this.props.history.push(`/lodgings/${lodging.id}`);
  }

  render() {
    return (
      <div id='map-container' ref={ map => { this.mapNode = map; } }></div>
    );
  }
}

export default LodgingMap;
