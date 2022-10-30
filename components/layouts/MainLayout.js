import React, { useState } from "react";
import Header from "components/layouts/header";
import Footer from "./footer";
import TopNav from "./top-nav";
import Subscription from "./subscription";
import Loader from "components/utils/loader";

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col w-[100%] min-h-[100vh] justify-between max-w-[1728px] relative my-[0] mx-[auto]">
      {loading && <Loader />}
      <div className="w-[100%] flex flex-col flex-1 items-center relative">
        <TopNav />
        <Header />
        {children}
      </div>
      <div className="flex flex-col w-[100%]">
        <Subscription setLoading={setLoading} />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
