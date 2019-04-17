// This isn't necessary but it keeps the editor from thinking L and carto are typos
/* global L, carto */

var map = L.map('map').setView([40.7305, -73.9515], 13);

// Add base layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png', {
  zoomControl: false
}).addTo(map);

L.marker([40.7355, -73.9943]).addTo(map)
    .bindPopup('The New School')
    .openPopup();    