import React from "react";
import BlogVideoCard from "./BlogVideoCard";
import { RiBox3Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import data from "../../data/AllBlogSection.json"


const AllBlogSection = () => {
  return (
    <div className="mt-24 px-4 sm:px-6  lg:px-8">
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <div className="text-[40px] font-bold bg-[#FFF5DB] pl-[30px] pt-[50px] pr-[20px] pb-[20px] rounded-tl-[100px]">
          Blogs
        </div>
        <div className="flex flex-col bg-[#F4F9FF] p-4 max-h-[400px] overflow-auto sm:flex-row gap-2 sm:gap-6">
          {data?.length > 0 ? (
            data.map((item) => (
              <div key={item.title}>
                <BlogVideoCard
                  icon={item.icon === "RiBox3Line" ? <RiBox3Line className="text-5xl bg-[#F1F7FF] text-blue-600" /> : <IoWalletOutline className="text-5xl bg-[#FFF5DB] text-orange-300" />}
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

export default AllBlogSection;
