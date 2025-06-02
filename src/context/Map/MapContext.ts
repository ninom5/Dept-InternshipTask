import { createContext } from "react";

export type MapContextType = {
  setMap?: (map: google.maps.Map) => void;
  goToLocation: (location: google.maps.LatLng, zoom?: number) => void;
  location: google.maps.LatLng | null;
  setLocation: (location: google.maps.LatLng) => void;
};

export const MapContext = createContext<MapContextType>({
  goToLocation: () => {},
  location: null,
  setLocation: () => {},
});
