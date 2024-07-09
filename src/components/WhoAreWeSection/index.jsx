"use client";
import React, { useEffect} from "react";
import Image from "next/image";
import ImageComponent from "./ImageComponent";
import whoWeAreData from "@/data/WhoAreWeSection/whoWeAreData";

const WhoAreWe = () => {
  
  const memberImages = whoWeAreData;
useEffect(() => {
  console.log(memberImages)
})

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
