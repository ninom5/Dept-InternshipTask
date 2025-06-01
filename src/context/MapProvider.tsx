import { useState, type FC, type PropsWithChildren } from "react";
import { MapContext } from "./MapContext";

export const MapProvider: FC<PropsWithChildren> = ({ children }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const goToLocation = (location: google.maps.LatLng, zoom: number = 12) => {
    console.log("aa" + location.lat());
    if (map) {
      map.setCenter(location);
      map.setZoom(zoom);
    }
  };

  return (
    <MapContext.Provider value={{ setMap, goToLocation }}>
      {children}
    </MapContext.Provider>
  );
};
