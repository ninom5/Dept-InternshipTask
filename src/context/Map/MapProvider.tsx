import { useState, type FC, type PropsWithChildren } from "react";
import { MapContext } from "./MapContext";

export const MapProvider: FC<PropsWithChildren> = ({ children }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [location, setLocation] = useState<google.maps.LatLng | null>(null);

  const goToLocation = (location: google.maps.LatLng, zoom: number = 12) => {
    if (map) {
      map.setCenter(location);
      map.setZoom(zoom);
    }
  };

  return (
    <MapContext.Provider
      value={{ setMap, goToLocation, location, setLocation }}
    >
      {children}
    </MapContext.Provider>
  );
};
