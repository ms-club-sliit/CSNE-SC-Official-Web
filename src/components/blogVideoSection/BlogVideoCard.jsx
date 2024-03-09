import React from "react";

const BlogVideoCard = (props) => {
  return (
    <div className="block rounded-3xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <div className="flex flex-col w-[190px] p-4 gap-3">
        <div className=" flex p-4 justify-center">
          {/* <img src={props.icon} alt="icon" /> */}
          {props.icon}
        </div>
        <div className="flex text-center text-xl font-bold font-mono">
          {props.title}
        </div>
        <div className="text-center">{props.description}</div>
      </div>
    </div>
  );
};

export default BlogVideoCard;
