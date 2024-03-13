import React from "react";
import Image from "next/image";

const SubscribeSection = () => {
  return (
    <div className="relative flex justify-center w-full mb-10 lg:my-14 px-5">
      <Image
        className="absolute h-[154px] object-cover right-[100px] top-[20%]"
        src="/static/dot_group.png"
        alt="Group of dots"
        width="150"
        height="154"
      />
      <div className="container lg:bg-red-50 relative mx-auto w-full my-5 rounded-[80px]">
        <div className="lg:grid grid-cols-2 text-center lg:text-left bg-test w-full rounded-[75px]">
          <div className="hidden lg:block absolute -z-10 flex bg-red-100 h-[65%] bottom-[-20px] left-[-60px] rotate-[90deg] rounded-br-[100px] w-[13%] transition-all duration-300" />
          <div className="lg:px-5 lg:ml-10 lg:pl-10 lg:my-auto">
            <div className="text-3xl lg:text-4xl text-[40px] text-black font-semibold">
              Subscribe
            </div>
            <div className="leading-[160%] lg:text-gray-600 lg:text-xl w-full lg:max-w-lg mt-10 lg:mt-5">
              Get the latest updates and information regarding CSNE Club of
              SLIIT right to your inbox!
            </div>
          </div>
          <div className="lg:w-full lg:h-[253px] flex items-center justify-end relative w-full md:mt-0">
            <Image
              className="hidden lg:block absolute w-8/12 h-[253px] my-auto right-[0]"
              src="/static/img_rectangle.svg"
              alt="Image of a curved rectangle"
              width="451"
              height="253"
            />
            <form className="w-full">
              <div className="hidden lg:block relative w-full mt-10 bg-white shadow-xl border border-blue_gray-50 border-solid lg:flex lg:flex-row h-max inset-y-[0] items-center justify-between left-[0] lg:my-auto p-2 rounded-[34px] shadow-[10px 20px  50px 0px #00000026] w-full md:w-[84%]">
                <input
                  disabled={true}
                  className="bg-white lg:ml-[22px] px-5 w-full lg:w-[8/12] py-2 text-base text-gray-500 border-none focus:outline-none"
                  placeholder="Subscribe to our channel here"
                />
                <button className="hidden lg:block px-6 cursor-pointer font-arial bg-red-700 font-bold rounded-[25px] h-[51px] leading-[normal] lg:mr-[25px] text-base text-center text-white tracking-[1.04px] w-[148px] hover:bg-red-600 transition-all">
                  Subscribe
                </button>
              </div>
              <button className="mx-auto mt-10 lg:hidden cursor-pointer font-arial bg-red-700 font-bold rounded-[25px] h-[51px] leading-[normal] lg:mr-[25px] text-base text-center text-white tracking-[1.04px] w-[148px] hover:bg-red-600 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
