class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(lodgings) {
    console.log('time to update', lodgings);

    const lodgingsObj = {};
    lodgings.forEach(lodging => { lodgingsObj[lodging.id] = lodging; });

    let geocoder;
    let address;
    console.log('inside update Markers', lodgings);
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
    console.log('status', status);
    console.log('inside create marker lodging', lodging);
    const marker = new google.maps.Marker({
      position: { lat: lodging.lat, lng: lodging.lng },
      map: this.map,
      lodgingId: lodging.id
    });

    this.markers[marker.lodgingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.lodgingId].setMap(null);
    delete this.markers[marker.lodgingId];
  }

}

window.testmap = new MarkerManager('testmap');
export default MarkerManager;
