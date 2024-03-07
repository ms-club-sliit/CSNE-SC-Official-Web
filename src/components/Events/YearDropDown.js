"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const YearDropDown = () => {
  const router = useRouter();

  const handleChange = (event) => {
    const year = event.target.value;
    router.push(`/events/${year}`);
  };

  return (
    <div>
      <select defaultValue="2024" onChange={handleChange}>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
};

export default YearDropDown;
