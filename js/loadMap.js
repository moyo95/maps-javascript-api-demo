// loadMap.js
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_MAPS_API_KEY}&callback=initMap`;
script.async = true;
document.head.appendChild(script);

