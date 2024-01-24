import React from "react";
import Image from "next/image";

const SubscribeSection = () => {
  return (
    <div className="flex justify-center w-full">
      <Image
        className="absolute h-[154px] object-cover right-[100px] top-[20%]"
        src="/static/dot_group.png"
        alt="Group of dots"
        width="150"
        height="154"
      />
      <div className="absolute inset-x-0 max-w-[1140px] mx-auto top-[13%] w-full">
        <div className="absolute flex bg-orange-50 bottom-[13%] h-[50%] left-[-3.5%] rotate-[90deg] rounded-br-[100px] w-[13%] transition-all duration-300" />
        <div className="absolute md:flex md:justify-between bg-gray-50 md:items-start h-max max-w-[1140px] mx-auto md:top-[13%] w-full rounded-[75px]">
          <div className="md:w-[50%] pl-10">
            <div className="sm:text-4xl font-arial md:text-[38px] mt-10 text-[40px] text-black-900 font-bold">
              Subscribe
            </div>
            <div className="leading-[160%] text-gray-600 text-lg w-full mt-5">
              Get the latest updates and information regarding CSNE Club of
              SLIIT right to your inbox!
            </div>
          </div>
          <div className="h-[253px] relative md:w-[50%] w-full mt-5 md:mt-0">
            <Image
              className="absolute h-[253px] inset-y-[0] my-auto right-[0]"
              src="/static/img_rectangle.svg"
              alt="Image of a curved rectangle"
              width="451"
              height="253"
            />
            <form>
              <div className="absolute bg-white border border-blue_gray-50 border-solid flex flex-row h-max inset-y-[0] items-center justify-between left-[0] my-auto p-2 rounded-[34px] shadow-[10px 20px  50px 0px #00000026] w-full md:w-[84%]">
                <input
                  className="ml-[22px] text-base text-gray-500 border-none font-avertademopecutteddemo focus:outline-none"
                  placeholder="Enter your email address.."
                />
                <button className="cursor-pointer font-arial bg-indigo-900 font-bold rounded-[25px] h-[51px] leading-[normal] mr-[25px] text-base text-center text-white tracking-[1.04px] w-[148px] hover:bg-indigo-700 transition-all">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
