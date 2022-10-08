import React from "react";
import Header from "components/layouts/header";
import { OneColumnLayout } from "components/layouts/OneColumnLayout";
import Sidebar from "./sidebar";
import Footer from "./footer";
import TopNav from "./top-nav";

const MainLayout = ({ children }) => {
  return (
    <OneColumnLayout>
      <TopNav />
      <Header />
      {children}
      <Footer />
    </OneColumnLayout>
  );
};

export default MainLayout;
