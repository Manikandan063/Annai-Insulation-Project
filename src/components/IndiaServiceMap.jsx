import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

const geoUrl = "/india-states.json";

const markers = [
  { name: "Tamil Nadu", coordinates: [78.6569, 11.1271] },
  { name: "Karnataka", coordinates: [75.7139, 15.3173] },
  { name: "Kerala", coordinates: [76.2711, 10.8505] },
  { name: "Andhra Pradesh", coordinates: [79.7400, 15.9129] },
  { name: "Telangana", coordinates: [79.0193, 18.1124] },
  { name: "Maharashtra", coordinates: [75.7139, 19.7515] },
  { name: "Gujarat", coordinates: [71.1924, 22.2587] },
  { name: "Rajasthan", coordinates: [74.2179, 27.0238] },
  { name: "Madhya Pradesh", coordinates: [78.6569, 22.9734] },
  { name: "Uttar Pradesh", coordinates: [80.9462, 26.8467] },
  { name: "Punjab", coordinates: [75.3412, 31.1471] },
  { name: "West Bengal", coordinates: [87.8550, 22.9868] },
  { name: "Odisha", coordinates: [85.0985, 20.9517] },
  { name: "Bihar", coordinates: [85.3131, 25.0961] },
  { name: "Jharkhand", coordinates: [85.2799, 23.6102] },
  { name: "Chhattisgarh", coordinates: [81.8661, 21.2787] },
  { name: "Assam", coordinates: [92.9376, 26.2006] },
  { name: "Delhi", coordinates: [77.1025, 28.7041] }
];

const IndiaServiceMap = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-heading font-bold text-dark mb-4">Our Service Areas</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We proudly provide premier industrial insulation services across 18 major states and territories in India.
        </p>
      </div>

      <div className="bg-blue-50/50 rounded-3xl p-4 sm:p-8 shadow-sm border border-blue-100">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1050,
            center: [80.5, 22.5]
          }}
          className="w-full h-auto max-h-[700px] filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-[1.02]"
        >
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="100%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="url(#mapGradient)"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  style={{
                    default: { outline: "none", filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.2))" },
                    hover: { fill: "#9ca3af", outline: "none", filter: "drop-shadow(4px 8px 8px rgba(0,0,0,0.3))", transform: "translateY(-2px)", transition: "all 0.3s" },
                    pressed: { fill: "#6b7280", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          
          {markers.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <g
                fill="none"
                stroke="#1B4F72"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
                <circle cx="12" cy="10" r="3" fill="#1B4F72" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" fill="#1ABC9C" stroke="#1B4F72" fillOpacity="0.9" />
              </g>
              <text
                textAnchor="middle"
                y={12}
                style={{ fontFamily: "Inter, sans-serif", fill: "#1f2937", fontSize: "11px", fontWeight: "700", textShadow: "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default IndiaServiceMap;
