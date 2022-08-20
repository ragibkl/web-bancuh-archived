import { Tooltip } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";
type Markers = {
  name: string;
  coordinates: [number, number];
}[];

const markers: Markers = [
  { name: "Tokyo: jp-dns1", coordinates: [139.6503, 35.6762] },
  { name: "Singapore: sg-dns1, sg-dns2", coordinates: [103.8198, 1.3521] },
  { name: "France: fr-dns1, fr-dns2", coordinates: [2.2137, 46.2276] },
];

export default function MapChart() {
  return (
    <ComposableMap projection="geoMercator" width={1000} height={500}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              fill="#fff"
              stroke="#bbb"
              strokeWidth={1}
              key={geo.rsmKey}
              geography={geo}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates }) => (
        <Tooltip key={name} open title={name} arrow placement="right">
          <Marker coordinates={coordinates}>
            <circle r={5} fill="#000" stroke="#fff" strokeWidth={1} />
          </Marker>
        </Tooltip>
      ))}
    </ComposableMap>
  );
}
