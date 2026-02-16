import { useEffect } from 'react';
import L from 'leaflet';

export default function Map() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const map = L.map('map', { zoomControl: false }).setView([48.8566, 2.3522], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributeurs',
      }).addTo(map);
    }
  }, []);

  return <div id="map" style={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', zIndex: '1' }} />;
}
