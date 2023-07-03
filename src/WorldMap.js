import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries, missingCountries } from "./Countries";

// Define the reginalTip function
function reginalTip(event, label, code) {
  return label.html(`
    <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
      <p>
        <b>${label.html()}</b>
      </p>
      <p>${countries[code]}</p>
    </div>`);
}

// Define the markerTip function
function markerTip(event, label, code) {
  return label.html(`
    <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px">
      <p style="color: black !important;">
        <b>${label.html()}</b>
      </p>
    </div>`);
}

function WorldMap() {
  return (
    <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        backgroundColor="#282c34"
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "red",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={reginalTip} // Use the reginalTip function directly
        onMarkerTipShow={markerTip} // Use the markerTip function directly
      />
    </div>
  );
}

export default WorldMap;
