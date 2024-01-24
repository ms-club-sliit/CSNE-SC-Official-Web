"use client";
import React from "react";

const ContactUs = () => {
  const background = "/public/images/contact-us-backgroud.png";

  return (
    <div className="bg-whitegray">
      <div
        className="bg-cover bg-center h-full bg-whitegray "
        style={{ backgroundImage: 'url("/contact-backgroud.png")' }}
      >
        <h1 className="text-black text-4xl sm:text-5xl lg:text-7xl font-bold ml-4 sm:ml-20px mt-4 sm:mt-20 ">
          Contact Us
        </h1>
        <div className="flex flex-row flex-wrap m-8 h-auto">
          <div className="flex flex-col m-4 p-4 w-530px h-57vh bg-white rounded-xl">
            <p className="text-gray text-2xl sm:text-3xl">
              Explore all the events organized by our students.{" "}
            </p>
            <div className="flex flex-row mt-4 sm:mt-6">
              <img
                src="/facebook.png"
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4 "
              />
              <p className="text-black text-lg sm:text-2xl mt-1">
                facebook.com/csnesliit{" "}
              </p>
            </div>
            <div className="flex flex-row mt-4 sm:mt-6">
              <img
                src="/instagram.jpg"
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4"
              />
              <p className="text-black text-lg sm:text-2xl mt-1">
                instagram.com/csnesliit{" "}
              </p>
            </div>
            <div className="flex flex-row mt-4 sm:mt-6">
              <img
                src="/linkdln.jpg"
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4"
              />
              <p className="text-black text-lg sm:text-2xl mt-1">
                linkedin.com/csnesliit
              </p>
            </div>
            <div className="flex flex-row mt-4 sm:mt-6">
              <img
                src="/github.png"
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4"
              />
              <p className="text-black text-lg sm:text-2xl mt-1">
                github.com/csnesliit
              </p>
            </div>
            <div className="flex flex-row mt-4 sm:mt-6">
              <img
                src="/youtube.png"
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4"
              />
              <p className="text-black text-lg sm:text-2xl mt-1">
                youtube.com/csnesliit
              </p>
            </div>
          </div>
          <div className="flex flex-col m-4 p-5 w-1000px h-600px bg-white rounded-xl">
            <p className="text-gray text-2xl sm:text-3xl ml-5">
              Send your message{" "}
            </p>
            <p className="text-gray text-xl sm:text-2xl ml-5 mt-4">Name </p>
            <input className=" border-2 border-lightgray rounded-3xl w-80vw h-12 ml-5 mt-3 mr-5"></input>
            <p className="text-gray text-xl sm:text-2xl ml-5 mt-12">
              Email Address{" "}
            </p>
            <input className=" border-2 border-lightgray rounded-3xl w-80vw h-12 ml-5 mt-3 mr-5"></input>
            <p className="text-gray text-xl sm:text-2xl ml-5 mt-12">Message </p>
            <input className=" border-2 border-lightgray rounded-3xl w-80vw h-60 ml-5 mt-3 mr-5"></input>
            <button className="bg-darkblue rounded-3xl w-40 h-14 ml-5 mt-8 mr-5 ml-auto text-white text-xl sm:text-2xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
