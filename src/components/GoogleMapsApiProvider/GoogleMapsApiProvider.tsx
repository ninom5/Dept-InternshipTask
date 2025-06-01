import { APIProvider } from "@vis.gl/react-google-maps";
import type { ReactNode } from "react";
import { toast } from "react-toastify";

interface MapsProviderProps {
  children: ReactNode;
}

export const GooglAPIProvider = ({ children }: MapsProviderProps) => {
  return (
    <APIProvider
      apiKey={import.meta.env.VITE_APP_GOOGLE_MAP_API}
      onLoad={() => console.log("Successfully loaded map")}
      onError={(error: Error | any) => {
        console.error(`Error loading map: ${error}`);
        toast.error(`Error loading map: ${error?.message}`);
      }}
      libraries={["places"]}
    >
      {children}
    </APIProvider>
  );
};
