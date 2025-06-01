import s from "./errorFallback.module.css";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return (
    <div className={s.errorFallback}>
      <h1>Something went wrong:</h1>

      <p>{error.message}</p>

      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
