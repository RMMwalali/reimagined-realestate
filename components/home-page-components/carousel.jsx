import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./carousel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // navigation={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper text-xl"
      >
        <SwiperSlide>
        Working with Patnan Investment was an absolute pleasure. From the initial consultation to the final closing, they went above and beyond to ensure our needs were met. Their team's expertise and attention to detail made the entire process seamless. Thanks to their guidance, we found the perfect home that exceeded our expectations. Highly recommend!
        </SwiperSlide>
        <SwiperSlide>
        I cannot speak highly enough of the professionalism and dedication displayed by the team at Patnan Investments. Their knowledge of the market and commitment to finding the right property for us were truly impressive. They took the time to understand our requirements and provided invaluable advice throughout the buying process. We couldn't be happier with the outcome.
        </SwiperSlide>
        <SwiperSlide>
        Choosing Patnan Investment as our real estate partner was one of the best decisions we made. Their integrity and transparency set them apart from the rest. They kept us informed at every step, ensuring we felt confident and informed throughout the journey. Thanks to their expertise, we were able to secure an investment property that has exceeded our expectations.
        </SwiperSlide>
        <SwiperSlide>
        Our experience with Patnan Investment was nothing short of exceptional. From the initial inquiry to the final closing, their team provided unparalleled service and support. They listened to our needs, answered all our questions, and guided us through the entire process with professionalism and care. We are grateful for their expertise and would highly recommend them to anyone in search of their dream property.
        </SwiperSlide>
        <div className="slider-controler flex max-md:justify-center  gap-3  mt-16">
          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-prev static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {"<"}
          </div>

          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-next static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {">"}
          </div>
        </div>
      </Swiper>
    </>
  );
}
