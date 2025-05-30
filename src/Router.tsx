import { HomePage, LoginPage } from "@pages/index";
import { routes } from "@routes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
