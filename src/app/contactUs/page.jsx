"use client"
import React, { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [existing, setExisting] = useState(false)

  return (
    <div className="bg-whitegray">
      <div
        className="bg-cover bg-center h-full bg-whitegray lg:pb-20"
        style={{ backgroundImage: 'url("/images/contact-backgroud2.png")' }}
      >
        <div className="container mx-auto flex flex-row lg:grid lg:grid-cols-3 gap-5 flex-wrap h-auto justify-center">
          <h1 className="col-span-5 text-black text-4xl my-3 sm:text-5xl lg:text-5xl font-bold">
            Contact Us
          </h1>
          <div className="flex text-center lg:text-left flex-col p-10 h-fit bg-white rounded-xl lg:mr-10">
            <p className="text-gray lg:text-lg">
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
              <p className="text-black lg:text-lg mt-1">
                <a href="https://www.facebook.com/csnesc?mibextid=LQQJ4d">
                  facebook.com/csnesliit{" "}
                </a>
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
              <p className="text-black lg:text-lg mt-1">
                <a href="https://www.instagram.com/csne.sc?igsh=NmE4c29hMGFvMXpj">
                  instagram.com/csnesliit{" "}
                </a>
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
              <p className="text-black lg:text-lg mt-1">
                <a href="https://www.linkedin.com/company/sliit-csne-student-community/">
                  linkedin.com/csnesliit
                </a>
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
              <p className="text-black lg:text-lg mt-1">
                <a href="https://youtube.com/@sliitcsnestudentcommunity?si=0vavn_jtFAUXELH3">
                  youtube.com/csnesliit
                </a>
              </p>
            </div>
            <div className="flex flex-row mt-4 sm:mt-6">
              <Image
                src="/images/sliit.png"
                alt="sliit"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 mr-7 mb-4"
              />
              <p className="text-black lg:text-lg mt-1">
                <a href="https://www.sliit.lk/computing/programmes/computer-systems-network-engineering-degree/">
                  sliit.com/csnesliit
                </a>
              </p>
            </div>
          </div>
          <form className="flex flex-col p-10 col-span-2 w-full text-center lg:text-left lg:bg-white rounded-xl">
            <p className="text-gray text-2xl lg:text-xl w-full mb-8">
              Send Your Message{" "}
            </p>
            <p className="text-gray lg:text-lg mt-4">Name </p>
            <input type="text" name="name" className=" border-2 px-5 border-lightgray rounded-3xl w-80vw h-12 mt-3 mr-0 lg:mr-5" required/>
            <div className="flex flex-row mt-4 space-x-4">
              <label className="text-gray lg:text-lg flex items-center">
                New Comer
                <input type="radio" name="studentType" value="newcomer" onChange={() => setExisting(false)} className="ml-2 w-5 h-5" defaultChecked required/>
              </label>
              <label className="text-gray lg:text-lg flex items-center">
                Existing Student
                <input type="radio" name="studentType" value="existing" onChange={() => setExisting(true)} className="ml-2 w-5 h-5" required/>
              </label>
            </div>
            {
              existing && (
                <div>
                <p className="text-gray lg:text-lg mt-4">Year and Semester </p>
                <select name="year" className="border-2 px-5 border-lightgray rounded-3xl w-full h-12 mt-3 mr-0 lg:mr-5 lg:w-[720px]" required>
                  <option value="y1s1">Year 1, Semester 1</option>
                  <option value="y1s2">Year 1, Semester 2</option>
                  <option value="y2s1">Year 2, Semester 1</option>
                  <option value="y2s2">Year 2, Semester 2</option>
                  <option value="y3s1">Year 3, Semester 1</option>
                  <option value="y3s2">Year 3, Semester 2</option>
                  <option value="y4s1">Year 4, Semester 1</option>
                  <option value="y4s2">Year 4, Semester 2</option>
                </select>
                </div>
              )
            }
            <p className="text-gray lg:text-lg mt-4">Phone Number </p>
            <input type="tel" name="phone" pattern="[0-9]{10}" placeholder="0XX-XXX-XXXX" className=" border-2 px-5 border-lightgray rounded-3xl w-80vw h-12 mt-3 mr-0 lg:mr-5" required/>
            <p className="text-gray lg:text-lg mt-4">Email Address </p>
            <input type="email" name="email" pattern="^[a-zA-Z0-9!#$%&amp;'*+\/=?^_`\{\|\}~.\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*$" placeholder="example@example.com" className=" border-2 px-5 border-lightgray rounded-3xl w-80vw h-12 mt-3 mr-0 lg:mr-5" required/>
            <p className="text-gray lg:text-lg mt-4">Message </p>
            <textarea name="message" className="border-2 p-5 text-wrap border-lightgray rounded-3xl w-80vw h-60 mt-3 mr-0 lg:mr-5" required/>
            <div className="relative flex w-full justify-center lg:justify-end">
              <button type="submit" className="bg-hero-section-button text-white lg:text-lg py-3 rounded-full mt-8 w-max px-10 ">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
