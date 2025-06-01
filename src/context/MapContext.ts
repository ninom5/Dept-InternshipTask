import { createContext } from "react";

export type MapContextType = {
  setMap?: (map: google.maps.Map) => void;
  goToLocation: (location: google.maps.LatLng, zoom?: number) => void;
};

export const MapContext = createContext<MapContextType>({
  goToLocation: () => {},
});
