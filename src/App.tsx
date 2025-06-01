import { ErrorBoundary } from "react-error-boundary";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorFallback } from "@components/index";

function App() {
  const queryClient = new QueryClient();
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ToastContainer />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
