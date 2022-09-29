import React from "react";
import Header from "components/layouts/header";
import { OneColumnLayout } from "components/layouts/OneColumnLayout";
import Sidebar from "./sidebar";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  return (
    <OneColumnLayout>
      <Header />
      {/* <div className="dashboard-body"> */}
      {/* <Sidebar /> */}
      {children}
      {/* </div> */}
      <Footer />
    </OneColumnLayout>
  );
};

export default MainLayout;
