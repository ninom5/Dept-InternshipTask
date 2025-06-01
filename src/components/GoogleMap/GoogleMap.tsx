import { Map, useMap } from "@vis.gl/react-google-maps";
import s from "./googleMap.module.css";
import { useMapContext } from "@hooks/useMapContext";
import { useEffect } from "react";

export const GoogleMap = () => {
  const { setMap } = useMapContext();
  const map = useMap();

  useEffect(() => {
    console.log("map from useMap():", map);
    if (map && setMap) setMap(map);
  }, [map, setMap]);

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
        />
      </div>
    </section>
  );
};
