import React from "react";
import { NavbarSticky } from "../../layouts/Navbar/NavbarComponent";
import MainContentHome from "../../components/Content/Home";
import { FooterComponents } from "../../layouts/Footer/FooterComponent";

export const Home = () => {
  return (
    <div>
      <NavbarSticky />
      <MainContentHome />
      <FooterComponents />
    </div>
  )
};

export default Home;
