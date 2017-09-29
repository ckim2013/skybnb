class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(lodgings) {
    const lodgingsObj = {};
    lodgings.forEach(lodging => { lodgingsObj[lodging.id] = lodging; });

    let geocoder;
    let address;

    if (lodgings.length !== 0) {
      lodgings
      .filter(lodging => !this.markers[lodging.id])
      .forEach(newLodging => {
        this.createMarkerFromLodging(newLodging);
      }
    );

    }

    Object.keys(this.markers)
      .filter(lodgingId => !lodgingsObj[lodgingId])
      .forEach(lodgingId => { this.removeMarker(this.markers[lodgingId]); });
  }

  createMarkerFromLodging(lodging) {
    const marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: { lat: lodging.lat, lng: lodging.lng },
      map: this.map,
      lodgingId: lodging.id,
      optimized: false
    });

    marker.addListener('click', () => this.handleClick(lodging));
    this.markers[marker.lodgingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.lodgingId].setMap(null);
    delete this.markers[marker.lodgingId];
  }

}

window.testmap = new MarkerManager('testmap');
export default MarkerManager;
