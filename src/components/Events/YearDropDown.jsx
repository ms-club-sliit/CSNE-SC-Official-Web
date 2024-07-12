"use client"
import { useParams } from 'next/navigation'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const YearDropDown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const params = useParams();

  const handleChange = (year) => {
    router.push(`/events/${year}`);
    setIsOpen(false);
  };

  const years = ['2024', '2023', '2022'];

  return (
    <div className="relative inline-block text-left z-50 mt-2 mb-2">
      <div>
        <button type="button" className="inline-flex justify-center w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-[#1D1163] text-sm font-medium text-white hover:bg-[#1d1163de] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#1d1163de]" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen(!isOpen)}>
          {params?.year}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className={`absolute md:right-0 w-full rounded-md shadow-lg bg-[#1D1163] ring-1 ring-black ring-opacity-5 ${isOpen ? 'block' : 'hidden'} `} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          {years.map((year) => (
            <a key={year} className="block cursor-pointer  px-4 py-2 text-sm text-white hover:bg-[#2424a7de] hover:text-white" role="menuitem" onClick={() => handleChange(year)}>
              {year}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearDropDown;
