import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const Main = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <>
        <Outlet />
      </>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default Main;
