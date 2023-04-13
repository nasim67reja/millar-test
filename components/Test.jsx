import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";

export default function Test() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  SwiperCore.use([Autoplay]);

  return (
    <>
      <div
        className={`px-[6rem] max-w-[400px] sm:max-w-[455px] lg:max-w-[900px] xl:max-w-[1350px]  mx-auto relative `}
      >
        <Swiper
          slidesPerView={
            windowSize.width < 1024 ? 1 : windowSize.width < 1280 ? 2 : 3
          }
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-fit "
        >
          <SwiperSlide>
            <Slide data={slideInfo[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide data={slideInfo[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide data={slideInfo[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide data={slideInfo[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide data={slideInfo[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <Slide data={slideInfo[2]} />
          </SwiperSlide>
        </Swiper>
        <div
          className="swiper-button-prev absolute left-[0rem] sm:left-[1rem] md:left-0 "
          style={{ color: "#C7C7C7" }}
        ></div>
        <div
          className="swiper-button-next absolute right-[5rem] sm:right-[1rem] md:right-0"
          style={{ color: "#C7C7C7" }}
        ></div>
      </div>
    </>
  );
}

const Slide = ({ data }) => {
  return (
    <>
      <div className="w-[42rem] sm:w-[44rem] xl:w-[355px] bg-[#D9D9D9]   p-[1.6rem] rounded-[5px] border-[0.5px] border-[#A5A5A5] h-[420px] sm:h-[500px] lg:h-[550px]  transition-all duration-500">
        <div className="flex flex-col justify-between h-full">
          <h4 className="text-[16px] xl:text-[20px] font-semibold text-[#2D2525] text-center">
            {data.heading}
          </h4>
          <Image
            width={321}
            height={188}
            src={data.image}
            alt={data.alt}
            className="w-[90%] sm:w-full h-fit"
          />
          <div>
            <p className="text-t-secondary text-[12px] sm:text-[14px] xl:text-[16px] px-[1rem]">
              {data.description}
            </p>
            <div className="flex flex-col items-start gap-[2px] mt-[1rem]">
              <button className="bg-btn-bg text-white rounded-[5px] px-[3.6rem] py-[0.5rem] text-[16px] hover:outline hover:outline-1 hover:bg-white hover:text-t-color transition-all">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const slideInfo = [
  {
    heading: "ACE HANDYMAN SERVICES",
    alt: "image-acelogo",
    image: "/images/ace.png",
    description: `As of September of 2019, Handyman Matters
      was acquired by Ace Hardware.Founded in
      1998 and now focused on “The Next 20”
      after celebrating 20 years in business,
      Handyman Matters is a national franchise
      organization that offers home and
      commercial maintenance,
      improvement and...`,
  },
  {
    heading: "WATERSTATION TECHNOLOGY(WST)",
    image: "/images/waterStation.png",
    alt: "image-waterstation",

    description: `Market Opportunity in the Vending Industry
      Welcome to the largest "all-cash" business
      in the world - the booming, $42 Billion Dollar
      Vending Industry! New convenient
      innovations like RedBox continue to propel
      this remarkable industry to new heights. In
      fact, every minute, over $79,000 is put in
      vending machines in the United States alo...`,
  },
  {
    heading: "TWO MAIDS & A MOP",
    image: "/images/twomaids.png",
    alt: "twomaids-logo",
    description: `About Two Maids & A MopTwo Maids & A
      Mop is a residential housekeeping company
      headquartered in Birmingham, Alabama.
      The nation's fastest growing residential
      cleaning company and an Inc. 5000
      company, the business uses a proprietary
      "Pay for Performance" compensation scale,
      where...`,
  },
  {
    heading: "ACE HANDYMAN SERVICES",
    alt: "image-acelogo",
    image: "/images/ace.png",
    description: `As of September of 2019, Handyman Matters
      was acquired by Ace Hardware.Founded in
      1998 and now focused on “The Next 20”
      after celebrating 20 years in business,
      Handyman Matters is a national franchise
      organization that offers home and
      commercial maintenance,
      improvement and...`,
  },
];
