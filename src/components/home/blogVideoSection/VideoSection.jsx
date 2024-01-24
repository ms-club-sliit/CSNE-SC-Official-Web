import React from "react";
import BlogVideoCard from "./BlogVideoCard";
import { LuVideo } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
const data = [
  {
    icon: <LuVideo className="text-5xl bg-[#FFF2F8]  text-pink-400" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <VscGraph className="text-5xl bg-[#DEFFEE] text-[#00DA71]" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <LuVideo className="text-5xl  bg-[#FFF2F8]  text-pink-400" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <VscGraph className="text-5xl bg-[#DEFFEE] text-[#00DA71]" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <LuVideo className="text-5xl  bg-[#FFF2F8]  text-pink-400" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <VscGraph className="text-5xl bg-[#DEFFEE] text-[#00DA71]" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <LuVideo className="text-5xl  bg-[#FFF2F8]  text-pink-400" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <VscGraph className="text-5xl bg-[#DEFFEE] text-[#00DA71]" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
];

const VideoSection = () => {
  return (
    <div className="max-w-2xl mt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="text-[40px] font-bold text-center pl-[30px]">
          Our Videos
        </div>
        <div className="flex flex-col bg-[#F4F9FF] p-4 overflow-auto  sm:flex-row gap-4 sm: sm:gap-6 ">
          {data.map((item) => (
            <div key={item.title}>
              <BlogVideoCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
