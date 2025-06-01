import { Map } from "@vis.gl/react-google-maps";
import s from "./googleMap.module.css";

export const GoogleMap = () => {
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
