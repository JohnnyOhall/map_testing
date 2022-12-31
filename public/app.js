// let {database} = require('./database')

function initMap() {
  // Map options

  let marker, map;

  const options = {center: { lat: 51.5072, lng: 0.1276 }, zoom: 10.5}

  // New Map
  map = new google.maps.Map(document.getElementById("map"), options);

  // Add marker
  const addMarker = property => {
    const marker = new google.maps.Marker({position: property.location, map});

    // Check for custom icon
    property.imageIcon && marker.setIcon(property.imageIcon);

    if (property.content) {
      const detailWindow = new google.maps.InfoWindow({content: property.content})
      marker.addListener("click", () => detailWindow.open(map, marker))
    }
  }

  function addMarkersArray() {
    const scaledSize = new google.maps.Size(50, 50)

    const markerArray = // database here when function
    [
      { location: {lat: 51.531182291265445, lng: -0.12463054402555988}, 
        imageIcon: {
          url: "https://static.thenounproject.com/png/7729-200.png",
          scaledSize},
        content:  `<h2> Harry Potter and the Philosophers Stone (2001) </h2>`},

      { location: {lat: 51.48734741698893, lng: -0.12450705936751787},
        imageIcon: {
          url: "https://w7.pngwing.com/pngs/11/611/png-transparent-daniel-craig-james-bond-film-series-skyfall-eve-moneypenny-james-bond-necktie-business-film.png",
          scaledSize},
        content: `<h2> Game of thrones S02E01 (2014) </h2>`}
    ];

    markerArray.forEach(marker => addMarker(marker))
  };

  const placeMarker = location => {
    marker ?
      marker.setPosition(location):
      marker = new google.maps.Marker({
        position: location,
        map,
        draggable: true,
      });
      
      let lat = marker.getPosition().lat();
      let lng = marker.getPosition().lng();
      console.log(`lat: ${lat}, lng: ${lng}`)
  }

  addMarkersArray()
  google.maps.event.addListener(map, 'click', event => placeMarker(event.latLng));
}

window.initMap = initMap;

// https://stackoverflow.com/questions/6910847/get-boundaries-longitude-and-latitude-from-current-zoom-google-maps  <--- Lat long limits