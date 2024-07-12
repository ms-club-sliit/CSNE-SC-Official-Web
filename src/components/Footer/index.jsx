"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    const dateInstance = new Date();
    setCurrentYear(dateInstance.getFullYear().toString());
  }, []);

  return (
    <div className="h-1/3 pb-5 ">
      <div className="flex relative pt-5 flex-col md:flex-row md:space-x-5 lg:pl-8 lg:py-8 text-gray-400 bg-white">
        <div className="lg:container lg:mx-auto lg:justify-left w-full text-left mb-4 md:mb-0">
          <Image
            width={500}
            height={500}
            alt="csnescLogo"
            src="/static/csnesc-logo.png"
            className="w-4/12 lg:w-48 h-auto mb-2 mx-auto lg:mx-0"
          />
          <div className="para m-5 text-sm text-center lg:text-left">
            <p className="lg:max-w-sm md:max-w-sm">
              A volunteer-driven student community aiming to bridge the skill
              gap between an Undergraduate and an Industry Professional
            </p>
          </div>
          <div className="flex justify-center lg:justify-start mt-4 ml-5 ">
            <a
              href="https://www.facebook.com/csnesc?mibextid=LQQJ4d"
              target="_blank"
              className="mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <path
                   fill="#3f51b5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/csne.sc?igsh=NmE4c29hMGFvMXpj"
              target="_blank"
              className="mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fd5"></stop>
                  <stop offset=".328" stopColor="#ff543f"></stop>
                  <stop offset=".348" stopColor="#fc5245"></stop>
                  <stop offset=".504" stopColor="#e64771"></stop>
                  <stop offset=".643" stopColor="#d53e91"></stop>
                  <stop offset=".761" stopColor="#cc39a4"></stop>
                  <stop offset=".841" stopColor="#c837ab"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/sliit-csne-student-community/"
              target="_blank"
              className="mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0077B5"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </a>

            <a
              href="https://youtube.com/@sliitcsnestudentcommunity?si=0vavn_jtFAUXELH3"
              target="_blank"
              
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FF3D00"
                  d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                ></path>
                <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="md:w-7/12 lg:absolute right-0 py-5 text-center lg:float-right lg:text-start lg:mr-8 lg:ml-5 lg:p-12 lg:bg-blue-50 text-gray-800 lg:rounded-s-[40px]">
          <h3 className="text-lg font-semibold mb-4 ">Usefull links</h3>
          <div className="flex flex-col md:flex-row md:space-x-5">
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">Blog</a>{" "}
                </li>
                <li>
                  <a href="#">Code of conduct</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0">
              <ul>
                <li>
                  <a href="#">WhatsApp</a>
                </li>
                <li>
                  <a href="#">Support 24</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p bg-white text-gray-400 text-center text-sm relative z-10">
        Copyright @ {currentYear} MS-CLUB
      </div>
    </div>
  );
}
