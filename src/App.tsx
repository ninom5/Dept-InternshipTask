import { ErrorBoundary } from "react-error-boundary";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorFallback, GooglAPIProvider } from "@components/index";
import { MapProvider } from "context/index";

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
