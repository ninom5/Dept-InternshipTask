import {
  AdvancedMarker,
  InfoWindow,
  Map,
  useMap,
} from "@vis.gl/react-google-maps";
import s from "./googleMap.module.css";
import { useMapContext } from "@hooks/useMapContext";
import { useEffect, useState } from "react";
import { getCountryByLocation } from "utils/getCountryByLocation.util";
import { toast } from "react-toastify";

export const GoogleMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const { location, setMap } = useMapContext();
  const map = useMap();

  useEffect(() => {
    if (map && setMap) setMap(map);
  }, [map, setMap]);

  const handleMarkerClick = (e: google.maps.MapMouseEvent) => {
    const location = e.latLng;
    if (!location) {
      toast.error("Can't ge location");
      return;
    }

    getCountryByLocation(location, setSelectedCountry);
  };

  return (
    <section className={s.mapWrapper}>
      <div className={s.mapWrapperInner}>
        <Map
          defaultZoom={12}
          defaultCenter={{ lat: 45.815011, lng: 15.981919 }}
          mapId={import.meta.env.VITE_APP_MAP_ID}
          mapTypeControl={false}
          fullscreenControl={false}
          streetViewControl={false}
          cameraControl={false}
        >
          {location && (
            <AdvancedMarker
              position={{ lat: location.lat(), lng: location.lng() }}
              onClick={(e) => handleMarkerClick(e)}
            />
          )}

          {selectedCountry && (
            <InfoWindow
              position={location}
              onClose={() => setSelectedCountry(null)}
              className={s.infoWindow}
            >
              <h2>
                Country:
                <span className={s.infoWindowCountry}> {selectedCountry} </span>
              </h2>
            </InfoWindow>
          )}
        </Map>
      </div>
    </section>
  );
};
