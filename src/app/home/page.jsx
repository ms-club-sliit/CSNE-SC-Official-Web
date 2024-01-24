"use client";
import SubscribeSection from "@/components/SubscribeSection";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="container h-[100vh] bg-white flex items-center justify-center">
          <SubscribeSection/>
        </div>
      </div>
    </>
  );
};

export default Home;
