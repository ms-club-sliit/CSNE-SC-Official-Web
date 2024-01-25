"use client";
import React from "react";
import WhoAreWe from "./WhoAreWe";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="container min-h-[100vh] bg-white flex items-center justify-center">
          <p className="text-4xl font-bold">Home Page</p>
        </div>
      </div>
      <WhoAreWe />
    </>
  );
};

export default Home;
