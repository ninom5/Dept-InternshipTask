import { ErrorBoundary } from "react-error-boundary";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorFallback } from "@components/index";
import { GooglAPIProvider } from "@components/GoogleMapsApiProvider/GoogleMapsApiProvider";
import { MapProvider } from "context/MapProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <GooglAPIProvider>
          <MapProvider>
            <Router />
            <ToastContainer />
          </MapProvider>
        </GooglAPIProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
