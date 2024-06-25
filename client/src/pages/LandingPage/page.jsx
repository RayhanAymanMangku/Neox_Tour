import React from "react";
import { NavbarSticky } from "../../layouts/Navbar/NavbarComponent";
import MainContentHome from "../../components/Content/Home";

export const Home = () => {
  return (
    <div>
      <NavbarSticky />
      <MainContentHome />
    </div>
  )
};

export default Home;
