import React from "react";
import Image from "next/image";
import ImageComponent from "./ImageComponent";

const WhoAreWe = () => {
  const memberImages = [
    {
      src: "/static/committee/2023/Pasan_Prasident.jpg",
      alt: "memberPicture1",
      className: "object-cover w-full h-full",
      width: 500,
      height: 500,
      styles: "w-[100px] h-[100px] rounded-full absolute z-50 overflow-hidden"
    },
    {
      src: "/static/committee/2023/Udayanga_Vice President.jpg",
      alt: "memberPicture2",
      className: "object-cover w-full h-full",
      width: 500,
      height: 500,
      styles: "w-[90px] h-[90px] rounded-full absolute animate-north-west overflow-hidden z-40"
    },
    {
      src: "/static/committee/2023/Sandali_Secretary.jpg",
      alt: "memberPicture3",
      className: "object-cover w-full h-full",
      width: 500,
      height: 500,
      styles: "w-[90px] h-[90px] rounded-full absolute animate-south overflow-hidden z-40"
    },
    {
      src: "/static/committee/2023/Raveesha_AssistantSecretary.jpg",
      alt: "memberPicture4",
      className: "object-cover w-full h-full",
      width: 500,
      height: 500,
      styles: "w-[60px] h-[60px] rounded-full absolute animate-north overflow-hidden"
    },
    {
      src: "/static/committee/2023/Hirudika_Treasurer.jpg",
      alt: "memberPicture5",
      className: "object-cover w-full h-full",
      width: 500,
      height: 500,
      styles: "w-[60px] h-[60px] rounded-full absolute animate-south-west overflow-hidden"
    },
    {
      src: "/static/committee/2023/Tharush _ Assistant Treasurer .jpg",
      alt: "memberPicture6",
      className: "object-cover w-full h-full",
      width: 500,
      height: 500,
      styles: "w-[60px] h-[60px] rounded-full absolute animate-north-east overflow-hidden"
    },
    {
      src: "/static/committee/2023/Vikash_Media Coordinator.jpeg",
      alt: "memberPicture7",
      className: "object-cover w-full h-full",
      width: 500,
      height: 500,
      styles: "w-[50px] h-[50px] rounded-full absolute animate-east overflow-hidden"
    },
    {
      src: "/static/committee/2023/Thinuka_Editor.JPG",
      alt: "memberPicture8",
      className: "object-cover w-full h-full",
      width: 500,
      height: 500,
      styles: "w-[50px] h-[50px] rounded-full absolute animate-south-east overflow-hidden"
    }
  ];
  return (
    <div className="py-10">
      <div className="text-4xl font-bold text-center lg:text-5xl">
        Who Are We?
      </div>
      <div className="container flex flex-wrap items-center justify-center mx-auto lg:grid lg:grid-cols-3">
        <div className="lg:w-full flex items-center justify-center lg:justify-start mt-[50px]">
          <Image
            width={500}
            height={500}
            alt="csnescLogo"
            src="/static/csnesc-logo.png"
            className="w-6/12 h-auto lg:w-8/12 lg:ml-10"
          />
        </div>
        <div className="p-5 w-full text-center lg:text-left items-center lg:text-[#565656] mt-[50px] md:mt-[20px] lg:text-xl">
          <p>
            CSNE Club of SLIIT is a community group to support students in their
            quest of being a significant IT Professional.
          </p>
          <p>
            We encourage a peer-to-peer learning environment to faciliate an
            organic growth of knowledge. Our members are volunteers who aim to
            provide value back to their community.
          </p>
        </div>
        <div className="w-full relative flex justify-center items-center min-h-[400px]">
        {memberImages.map((image, index) => (
            <div key={index} className={image.styles}>
              <ImageComponent
                width={image.width}
                height={image.height}
                alt={image.alt}
                src={image.src}
                className={image.className}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
