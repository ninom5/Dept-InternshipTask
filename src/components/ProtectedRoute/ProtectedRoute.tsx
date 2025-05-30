import { routes } from "@routes/index";
import { Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("jwt");

  if (!token || token.trim() === "")
    return (
      <div>
        <h1>Unauthorized</h1>
        <p>
          Please <a href={routes.LOGIN}>login</a> to continue
        </p>
      </div>
    );

  return <Outlet />;
};
