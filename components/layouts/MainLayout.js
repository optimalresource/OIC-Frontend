import React from "react";
import Header from "components/layouts/header";
import { OneColumnLayout } from "components/layouts/OneColumnLayout";
import Sidebar from "./sidebar";

const MainLayout = ({ children }) => {
  return (
    <OneColumnLayout>
      <Header />
      {/* <div className="dashboard-body"> */}
      {/* <Sidebar /> */}
      {children}
      {/* </div> */}
    </OneColumnLayout>
  );
};

export default MainLayout;
