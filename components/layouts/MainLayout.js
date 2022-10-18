import React from "react";
import Header from "components/layouts/header";
import Footer from "./footer";
import TopNav from "./top-nav";
import Subscription from "./subscription";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-[100%] min-h-[100vh] justify-between max-w-[1728px] relative my-[0] mx-[auto]">
      <div className="w-[100%] flex flex-col flex-1 items-center relative">
        <TopNav />
        <Header />
        {children}
      </div>
      <div className="flex flex-col w-[100%]">
        <Subscription />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
