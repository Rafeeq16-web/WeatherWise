import React from "react";
import { MapContainer, Circle, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Map(props: any) {
  // Extracting coordinates from props
  const position = props.coordinates;

  // Custom icon for the marker
  const icon = L.icon({ iconUrl: "images/weather_marker.png" });

  return (
    // Container for the map with specified center, zoom level, and other properties
    <MapContainer
      center={position} // Center of the map
      zoom={13} // Initial zoom level
      scrollWheelZoom={false} // Disable zoom on scroll
      className="w-full h-80 sm:h-96 md:h-112 lg:h-128 rounded-lg" // Responsive size
    >
      {/* Tile layer for the base map */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Marker on the map */}
      <Marker position={position} icon={icon}>
        {/* Popup that appears when marker is clicked */}
        <Popup>{`${position[0]}, ${position[1]}`}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
