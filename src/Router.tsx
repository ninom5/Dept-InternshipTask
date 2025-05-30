import { CountriesPage, HomePage, LoginPage, NotFoundPage } from "@pages/index";
import { routes } from "@routes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@components/index";
import { HeaderLayout } from "@layouts/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.LOGIN} element={<LoginPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path={routes.COUNTRIES} element={<CountriesPage />} />
          </Route>
        </Route>

        <Route path={routes.NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
