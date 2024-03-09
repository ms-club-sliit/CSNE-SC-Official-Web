import React from "react";
import BlogVideoCard from "./BlogVideoCard";
import { LuVideo } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import data from "../../data/AllVideos.json"

const VideoSection = () => {
  return (
    <div className=" mt-4 px-4 sm:px-6  lg:px-8 ">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="text-[38px] font-bold text-center">Our Videos</div>
        <div className="flex flex-col bg-[#F4F9FF] max-h-[400px] p-4 overflow-auto  sm:flex-row gap-4 sm: sm:gap-6 ">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.title}>
                <BlogVideoCard
                 icon={item.icon === "LuVideo" ? <LuVideo className="text-5xl  bg-[#FFF2F8]  text-pink-400" /> : <VscGraph className="text-5xl bg-[#DEFFEE] text-[#00DA71]" />}
                 title={item.title}
                  description={item.description}
                />
              </div>
            ))
          ) : (
            <p>No data available.</p> 
          )}
        </div>
      </div>
    </div>
  );
  
};

export default VideoSection;
