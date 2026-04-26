"use client";

import { useEffect, useRef } from "react";

const TOWNS = [
  { name: "Havertown",         lat: 39.9837, lng: -75.3074 },
  { name: "Upper Darby",       lat: 39.9612, lng: -75.2699 },
  { name: "Springfield",       lat: 39.9301, lng: -75.3249 },
  { name: "Media",             lat: 39.9162, lng: -75.3877 },
  { name: "Drexel Hill",       lat: 39.9484, lng: -75.3013 },
  { name: "Swarthmore",        lat: 39.9023, lng: -75.3499 },
  { name: "Ridley Park",       lat: 39.8815, lng: -75.3238 },
  { name: "Brookhaven",        lat: 39.8679, lng: -75.3849 },
  { name: "Chester",           lat: 39.8493, lng: -75.3557 },
  { name: "Folcroft",          lat: 39.8962, lng: -75.2966 },
  { name: "Glenolden",         lat: 39.8987, lng: -75.2924 },
  { name: "Lansdowne",         lat: 39.9390, lng: -75.2724 },
  { name: "Morton",            lat: 39.9090, lng: -75.3274 },
  { name: "Norwood",           lat: 39.8901, lng: -75.3049 },
  { name: "Prospect Park",     lat: 39.8876, lng: -75.3099 },
  { name: "Ridley Township",   lat: 39.8818, lng: -75.3388 },
  { name: "Sharon Hill",       lat: 39.9065, lng: -75.2738 },
  { name: "Collingdale",       lat: 39.9165, lng: -75.2774 },
  { name: "Darby",             lat: 39.9193, lng: -75.2588 },
  { name: "Clifton Heights",   lat: 39.9290, lng: -75.2949 },
  { name: "Marcus Hook",       lat: 39.8184, lng: -75.4174 },
  { name: "Trainer",           lat: 39.8376, lng: -75.4024 },
  { name: "Eddystone",         lat: 39.8601, lng: -75.3488 },
  { name: "Woodlyn",           lat: 39.8726, lng: -75.3449 },
  { name: "Secane",            lat: 39.9226, lng: -75.3124 },
  { name: "Wallingford",       lat: 39.8862, lng: -75.3724 },
  { name: "Rose Valley",       lat: 39.8990, lng: -75.3874 },
  { name: "Nether Providence", lat: 39.8951, lng: -75.3724 },
];

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Dynamically import leaflet only on the client
    import("leaflet").then((mod) => {
      const L = mod.default;

      // Fix broken default icon paths caused by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(containerRef.current!, {
        center: [39.9162, -75.3349],
        zoom: 12,
        scrollWheelZoom: false,
      });

      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      TOWNS.forEach(({ name, lat, lng }) => {
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            `<strong style="font-family:Oswald,sans-serif;text-transform:uppercase;letter-spacing:0.04em;color:#1a2744">${name}</strong><br><span style="font-size:0.8125rem;color:#3d4d6a">Service area &mdash; MNCK Property Maintenance</span>`
          );
      });
    });

    return () => {
      if (mapRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapRef.current as any).remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="service-area-map-wrap" />;
}
