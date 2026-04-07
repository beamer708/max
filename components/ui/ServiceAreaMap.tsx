"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

// Fix Leaflet's default marker icon broken by webpack
function FixLeafletIcons() {
  const map = useMap();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const L = require("leaflet");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
    // suppress unused warning
    void map;
  }, [map]);
  return null;
}

type Town = {
  name: string;
  lat: number;
  lng: number;
};

const TOWNS: Town[] = [
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

// Center on Delaware County
const CENTER: LatLngExpression = [39.9162, -75.3349];

export function ServiceAreaMap() {
  return (
    <div className="service-area-map-wrap">
      <MapContainer
        center={CENTER}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", borderRadius: "6px" }}
      >
        <FixLeafletIcons />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {TOWNS.map((town) => (
          <Marker key={town.name} position={[town.lat, town.lng]}>
            <Popup>
              <strong style={{ fontFamily: "Oswald, sans-serif", textTransform: "uppercase", letterSpacing: "0.04em", color: "#1a2744" }}>
                {town.name}
              </strong>
              <br />
              <span style={{ fontSize: "0.8125rem", color: "#3d4d6a" }}>Service area &mdash; MNCK Property Maintenance</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
