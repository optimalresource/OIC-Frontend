import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const banners = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];
  return (
    <div className="flex justify-center items-center w-[90%] bmd:w-[100%] mt-[130px] bmd:mt-[100px] max640:mt-[60px] relative rounded-[0px]">
      <style type="text/css">
        {`
          @media (min-width: 769px) {
            .carousel-inner {
              border-radius: 50px !important;
            }
          }
        `}
      </style>
      <div className="w-[100%] relative my-5 mt-0 bg-cover rounded-[0px]">
        <Carousel>
          {banners.map((value, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  src={"/assets/images/slider/" + value + ".png"}
                  className="d-block w-100 rounded-[0px]"
                  alt="First slide"
                />
                <div
                  style={{ position: "absolute" }}
                  className="md:px-10 py-5 text-[#fff] top-0 left-0 h-[100%] w-[100%] flex flex-col items-center justify-center max400:px-2">
                  <div className="px-6 md:px-7 lg:px-12 max400:pr-1 max400:pl-1 max320:px-0 text-center">
                    <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold max400:text-3xl leading-[30px] md:leading-[80px] lg:leading-[80px] cinzel-font">
                      Now is the acceptable time
                    </h1>
                  </div>
                  <div className="flex flex-col items-center bg-[#000] bg-opacity-60 p-3 py-1 mb-[80px] md:mt-10 bmd:mt-5 md:min-w-[500px] bmd:min-w-[300px] max320:min-w-[200px]">
                    <h3 className="text-base md:text-lg lg:text-xl amd:font-semibold py-1 max400:py-1 max400:text-xs max400:font-normal">
                      DAY 1
                    </h3>
                    <h2 className="font-semibold text-center text-base md:text-xl lg:text-2xl">
                      Monday, 21st November
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg amd:font-semibold max400:font-normal">
                      Time: 6:00pm
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
