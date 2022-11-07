import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  const banners = [
    { eventDay: 'Monday, 21st', time: '6:00pm' },
    { eventDay: 'Tuesday, 22nd', time: '6:00pm' },
    { eventDay: 'Wednesday, 23rd', time: '6:00pm' },
    { eventDay: 'Thursday, 24th', time: '6:00pm' },
    { eventDay: 'Friday, 25th', time: '9:00pm' },
    { eventDay: 'Saturday, 26th', time: '3:00pm' },
    { eventDay: 'Sunday, 27th', time: '12:30pm' },
    // '8', '9'
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
              <Carousel.Item key={(index+1)}>
                <img
                  src={"/assets/images/slider/" + (index+1) + ".png"}
                  className="d-block w-100 rounded-[0px]"
                  alt="First slide"
                />
                <div
                  style={{ position: "absolute" }}
                  className="md:px-10 py-5 text-[#fff] top-0 left-0 h-[100%] w-[100%] flex flex-col items-center justify-center max400:px-2">
                  <div className="max400:px-7 px-8 lg:px-12 text-center">
                    <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold leading-[30px] md:leading-[50px] lg:leading-[80px] cinzel-font">
                      Now is the acceptable time
                    </h1>
                  </div>
                  <div className="flex-col items-center bg-[#000] d-none d-sm-flex bg-opacity-60 p-3 py-1 max575:mb-auto mb-[30px] lg:mb-[80px] md:mt-10 bmd:mt-5 md:min-w-[500px] bmd:min-w-[300px] max320:min-w-[200px]">
                    <h3 className="text-base md:text-lg lg:text-xl amd:font-semibold py-1 max400:py-1 max400:text-xs max400:font-normal">
                      DAY {(index + 1)}
                    </h3>
                    <h2 className="font-semibold text-center text-base md:text-xl lg:text-2xl">
                       {value.eventDay} November
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg amd:font-semibold max400:font-normal">
                      Time: {value.time}
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
