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
        address = newLodging.street + ', ' + newLodging.city
        + ', ' + newLodging.country;
        console.log('full address', address);
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address }, (res, status) =>
          {
            this.createMarkerFromLodging(res, status, newLodging);
          }
        );
      }
    );

    }

    Object.keys(this.markers)
      .filter(lodgingId => { !lodgingsObj[lodgingId]; })
      .forEach(lodgingId => { this.removeMarker(this.markers[lodgingId]); });
  }

  createMarkerFromLodging(res, status, lodging) {
    console.log('status', status);
    console.log('inside create marker lodging', lodging);
    console.log('inside create marker res', res);
    const lat = res[0].geometry.location.lat();
    const lng = res[0].geometry.location.lng();
    const marker = new google.maps.Marker({
      position: { lat, lng },
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
