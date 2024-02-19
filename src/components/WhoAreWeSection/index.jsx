import React from "react";
import Image from "next/image";

const WhoAreWe = () => {
  return (
    <div className="py-10">
      <div className="text-4xl lg:text-5xl font-bold text-center">
        Who Are We?
      </div>
      <div className="flex flex-wrap container lg:grid lg:grid-cols-3 mx-auto items-center justify-center">
        <div className="lg:w-full flex items-center justify-center lg:justify-start mt-[50px]">
          <Image
            width={500}
            height={500}
            alt="csnescLogo"
            src="/static/csnesc-logo.png"
            className="w-6/12 lg:w-8/12 h-auto"
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
          <div className="w-[100px] h-[100px] rounded-full absolute z-50 overflow-hidden">
            <Image
              width={500}
              height={500}
              alt="memberPicture1"
              className="object-cover w-full h-full"
              src="/static/committee/president.png"
            />
          </div>
          <div className="w-[90px] h-[90px] rounded-full absolute animate-north-west overflow-hidden z-40">
            <Image
              width={500}
              height={500}
              alt="memberPicture2"
              className="object-cover w-full h-full"
              src="/static/committee/vice-president.png"
            />
          </div>
          <div className="w-[90px] h-[90px] rounded-full absolute animate-south overflow-hidden z-40">
            <Image
              width={500}
              height={500}
              alt="memberPicture3"
              className="object-cover w-full h-full"
              src="/static/committee/sample-user.png"
            />
          </div>
          <div className="w-[60px] h-[60px] rounded-full absolute animate-north overflow-hidden">
            <Image
              width={500}
              height={500}
              alt="memberPicture4"
              className="object-cover w-full h-full"
              src="/static/committee/sample-user.png"
            />
          </div>
          <div className="w-[60px] h-[60px] rounded-full absolute animate-south-west overflow-hidden">
            <Image
              width={500}
              height={500}
              alt="memberPicture5"
              className="object-cover w-full h-full"
              src="/static/committee/sample-user.png"
            />
          </div>
          <div className="w-[60px] h-[60px] rounded-full absolute animate-north-east overflow-hidden">
            <Image
              width={500}
              height={500}
              alt="memberPicture6"
              className="object-cover w-full h-full"
              src="/static/committee/sample-user.png"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-full absolute animate-east overflow-hidden">
            <Image
              width={500}
              height={500}
              alt="memberPicture7"
              className="object-cover w-full h-full"
              src="/static/committee/sample-user.png"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-full absolute animate-south-east overflow-hidden">
            <Image
              width={500}
              height={500}
              alt="memberPicture8"
              className="object-cover w-full h-full"
              src="/static/committee/sample-user.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
