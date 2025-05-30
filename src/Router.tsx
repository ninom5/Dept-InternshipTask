import { HomePage } from "@pages/HomePage";
import { routes } from "@routes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
