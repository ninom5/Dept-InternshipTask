import type { RouteType } from "types";

export const routes: RouteType = {
  HOME: "/",
  LOGIN: "/login",
  COUNTRIES: "/countries",
  COUNTRY: "/countries/:code",
  NOT_FOUND_PAGE: "*",
};
