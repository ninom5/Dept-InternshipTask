import { Header } from "@components/index";
import { Outlet } from "react-router-dom";

export const HeaderLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
