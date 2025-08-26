function loadGoogleMapsScript() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_MAPS_API_KEY}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

function initMap() {
  const gateLocation = {
    lat: 35.70610308373265,
    lng: 139.7070689656173,
    heading: 333.48,
    pitch: -0.86,
  };

  const campusLocation = {
    lat: 35.70597226459471,
    lng: 139.7075747395764,
    heading: 65.07,
    pitch: 5.37,
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: gateLocation,
    zoom: 17,
    disableDefaultUI: true,
    fullscreenControl: false,
    mapId: import.meta.env.VITE_MAP_ID,
  });

  const panorama = new google.maps.StreetViewPanorama(document.getElementById("map"), {
    position: gateLocation,
    pov: {
      heading: gateLocation.heading,
      pitch: gateLocation.pitch,
    },
    visible: true,
    fullscreenControl: false,
  });

  map.setStreetView(panorama);

  document.getElementById("gateBtn").addEventListener("click", () => {
    panorama.setPosition(gateLocation);
    panorama.setPov({
      heading: gateLocation.heading,
      pitch: gateLocation.pitch,
    });
  });

  document.getElementById("campusBtn").addEventListener("click", () => {
    panorama.setPosition(campusLocation);
    panorama.setPov({
      heading: campusLocation.heading,
      pitch: campusLocation.pitch,
    });
  });
}

window.initMap = initMap;
loadGoogleMapsScript();
