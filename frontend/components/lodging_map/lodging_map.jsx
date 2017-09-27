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
  }, // San Francisco coords
  zoom: 13
};

class LodgingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 12
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.lodgings);
  }

  componentWillReceiveProps(newProps) {
    console.log('receive props', this.props);
    console.log('receive newprops', this.props);
    this.MarkerManager.updateMarkers(this.props.lodgings);
  }

  render() {
    return (
      <div>
        <div id='map-container' ref={ map => this.mapNode = map }></div>
      </div>
    );
  }
}

export default LodgingMap;
