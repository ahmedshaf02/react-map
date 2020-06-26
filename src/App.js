import React, { useState } from "react";
import "./styles.css";
import { Map, Popup, TileLayer, Marker } from "react-leaflet";

export default function App() {
  const [lat, setLat] = useState(19.07);
  const [lang, setLang] = useState(72.87);
  const [zoom,setZoom] = useState(5)

  const position = [lat,lang]

  return (
    <Map center={position} zoom={zoom} className="App">
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
          <Popup>
            You are here<br/>
            Mumbai,india
            </Popup>
      </Marker>
    </Map>
  );
}
