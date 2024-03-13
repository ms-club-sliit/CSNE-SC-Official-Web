import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="bg-whitegray">
      <div
        className="bg-cover bg-center h-full bg-whitegray lg:pb-20"
        style={{ backgroundImage: 'url("/images/contact-backgroud2.png")' }}
      >
        <div className="container mx-auto flex flex-row lg:grid lg:grid-cols-3 gap-5 flex-wrap h-auto justify-center">
          <h1 className="col-span-5 text-black text-4xl my-3 sm:text-5xl lg:text-6xl font-bold">
            Contact Us
          </h1>
          <div className="flex text-center lg:text-left flex-col p-10 h-fit bg-white rounded-xl lg:mr-10">
            <p className="text-gray text-lg lg:text-xl">
              Explore all the events organized by our students.{" "}
            </p>
            <div className="flex flex-row mt-10">
              <Image
                src="/images/facebook.png"
                alt="facebook"
                width={10000}
                height={10000}
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4 "
              />
              <p className="text-black text-lg lg:text-xl mt-1">
                facebook.com/csnesliit{" "}
              </p>
            </div>
            <div className="flex flex-row mt-4 sm:mt-6">
              <Image
                src="/images/instagram.jpg"
                alt="instagram"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4"
              />
              <p className="text-black text-lg lg:text-xl mt-1">
                instagram.com/csnesliit{" "}
              </p>
            </div>
            <div className="flex flex-row mt-4 sm:mt-6">
              <Image
                src="/images/linkdln.jpg"
                alt="linkedin"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4"
              />
              <p className="text-black text-lg lg:text-xl mt-1">
                linkedin.com/csnesliit
              </p>
            </div>
            <div className="flex flex-row mt-4 sm:mt-6">
              <Image
                src="/images/youtube.png"
                alt="youtube"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4"
              />
              <p className="text-black text-lg lg:text-xl mt-1">
                youtube.com/csnesliit
              </p>
            </div>
          </div>
          <div className="flex flex-col p-10 col-span-2 w-full text-center lg:text-left lg:bg-white rounded-xl">
            <p className="text-gray text-2xl lg:text-2xl w-full mb-8">
              Send Your Message{" "}
            </p>
            <p className="text-gray text-lg lg:text-xl mt-4">Name </p>
            <input className=" border-2 px-5 border-lightgray rounded-3xl w-80vw h-12 mt-3 mr-0 lg:mr-5"></input>
            <p className="text-gray text-lg lg:text-xl mt-4">Email Address </p>
            <input className=" border-2 px-5 border-lightgray rounded-3xl w-80vw h-12 mt-3 mr-0 lg:mr-5"></input>
            <p className="text-gray text-lg lg:text-xl mt-4">Message </p>
            <textarea className="border-2 p-5 text-wrap border-lightgray rounded-3xl w-80vw h-60 mt-3 mr-0 lg:mr-5" />
            <div className="relative flex w-full justify-center lg:justify-end">
              <button className="bg-hero-section-button text-white text-lg lg:text-xl py-3 rounded-full mt-8 w-max px-10 ">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
