import React from "react";
import BlogVideoCard from "./BlogVideoCard";
import { RiBox3Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";

const data = [
  {
    icon: <RiBox3Line className="text-5xl bg-[#F1F7FF]  text-blue-600" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <IoWalletOutline className="text-5xl bg-[#FFF5DB] text-orange-300" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <RiBox3Line className="text-5xl bg-[#F1F7FF] text-blue-600" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <IoWalletOutline className="text-5xl bg-[#FFF5DB] text-orange-300" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <RiBox3Line className="text-5xl bg-[#F1F7FF] text-blue-600" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <IoWalletOutline className="text-5xl bg-[#FFF5DB] text-orange-300" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <RiBox3Line className="text-5xl  text-blue-600" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
  {
    icon: <IoWalletOutline className="text-5xl bg-[#FFF5DB] text-orange-300" />,
    title: "What is Github?",
    description: "We present you a proposal and discuss niffty-gritty like",
  },
];

const AllBlogSection = () => {
  return (
    <div className="max-w-2xl mt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="text-[40px] font-bold bg-[#FFF5DB] pl-[30px] pt-[50px] pr-[20px] pb-[20px] rounded-tl-[100px]">
          Blogs
        </div>
        <div className="flex flex-col bg-[#F4F9FF] p-4 overflow-auto sm:flex-row gap-2 sm:gap-6">
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

export default AllBlogSection;
