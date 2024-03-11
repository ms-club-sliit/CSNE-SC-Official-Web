"use client";

// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const ImageCarousel = ({ slides }) => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 20 },
        1024: { slidesPerView: 2, spaceBetween: 100 },
      }}
      style={{ height: "300px" }}
    >
      {slides.length > 0 &&
        slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={"grid grid-cols-3 gap-2"}>
              <div
                className={
                  "col-span-2 w-full h-64 bg-gray-300 bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
                }
                style={{ backgroundImage: "url('" + `${slide.image}` + "')" }}
              >
                {slide.url ? (
                  <Link
                    href={slide.url}
                    className={
                      "w-full h-full flex flex-col justify-center items-center"
                    }
                  >
                    <svg
                      width="64"
                      height="66"
                      viewBox="0 0 64 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.0629 0.588669C14.6325 0.588669 0.371338 15.2578 0.371338 33.1868C0.371338 51.1157 14.6325 65.7849 32.0629 65.7849C49.4932 65.7849 63.7544 51.1157 63.7544 33.1868C63.7544 15.2578 49.4932 0.588669 32.0629 0.588669ZM25.7246 47.8559V18.5176L44.7395 33.1868L25.7246 47.8559Z"
                        fill="#2639ED"
                      />
                    </svg>
                  </Link>
                ) : (
                  ""
                )}
              </div>
              <div
                className={
                  "col-span-1 w-full h-64 bg-center bg-no-repeat flex flex-col justify-center pl-4"
                }
                style={{ backgroundImage: "url('/images/past-events-bg.svg')" }}
              >
                <h1 className={"text-md lg:text-lg xl:text-4xl"}>
                  {slide.title}
                </h1>
                <p className={"text-xs lg:text-md xl:text-lg"}>
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ImageCarousel;
