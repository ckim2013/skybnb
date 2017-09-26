import React from 'react';
import ReactDOM from 'react-dom';

const mapCenter = { lat: 37.7758, lng: -122.435 };

class LodgingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = { center: this.props.center, zoom: 13 };
    this.map = new google.maps.Map(map, options);
    this.listenForMove();
  }

  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      alert('map has moved, check console for updated bounds');
      console.log('center');
      console.log(bounds.getCenter().lat(), bounds.getCenter().lng());
      console.log("north east");
      console.log(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
      console.log("south west");
      console.log(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
    });
  }

  render() {
    return (
      <div id='map-container' ref='map'></div>
    );
  }
}

ReactDOM.render(
  <Map center={mapCenter} />,
  document.getElementById('root')
);
