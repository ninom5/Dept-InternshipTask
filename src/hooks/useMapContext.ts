import { MapContext } from "context/index";
import { useContext } from "react";

export const useMapContext = () => {
  const context = useContext(MapContext);

  if (!context)
    throw new Error("useMapContext must be used within a MapProvider");

  return context;
};
