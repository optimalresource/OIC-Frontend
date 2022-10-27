import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="mt-[-150px] flex w-[100vw] h-[calc(100vh+150px)] bg-[rgba(0,0,0,0.2)] fixed z-[10000] items-center justify-center">
      <InfinitySpin width="200" color="#0b508f" />
    </div>
  );
};

export default Loader;
