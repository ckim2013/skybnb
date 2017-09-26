import React from 'react';
import ReactDOM from 'react-dom';

class LodgingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div>
        HELLO
        <div id='map-container' ref={ map => this.mapNode = map }></div>
      </div>
    );
  }
}

export default LodgingMap;
