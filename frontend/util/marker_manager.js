class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(lodgings) {
    console.log('time to update', lodgings);

    const lodgingsObj = {};
    lodgings.forEach(lodging => lodgingsObj[lodging.id] = lodging)

    let geocoder;
    let address;

    lodgings
      .filter(lodging => !this.markers[lodging.id])
      .forEach(newLodging => {
        address = lodging.street + ', ' + lodging.city
                  + ', ' + lodging.country;
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address }, res =>
          {
            this.createMarkerFromLodging(res, newLodging);
          }
        );
      }
    )
  }

  createMarkerFromLodging(res, lodging) {
    const lat = res[0].geometry.location.lat();
    const lng = res[0].geometry.location.lng();
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.map,
      lodgingId: lodging.id
    });

  }
}

window.testmap = new MarkerManager('testmap');
export default MarkerManager;
