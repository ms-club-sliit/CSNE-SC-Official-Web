"use client";

import React, { useState } from "react";
import Image from "next/image";
import StoryData from "@/data/stories";

const Stories = () => {
  const sampleImage = "/images/back.png.jpeg";

  // State to manage which stories are expanded
  const [expandedStories, setExpandedStories] = useState([]);

  // Function to toggle story expansion
  const toggleExpand = (id) => {
    setExpandedStories((prev) =>
      prev.includes(id)
        ? prev.filter((storyId) => storyId !== id)
        : [...prev, id]
    );
  };

  // Helper function to get preview text
  const getPreviewText = (text) => {
    const previewLength = 600; // Number of characters to show in the preview
    if (text.length <= previewLength) return text;
    return text.slice(0, previewLength) + "..";
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-[url(/images/backgroundimg.png)] bg-no-repeat sm:bg-contain md:bg-cover lg:bg-cover 2xl:bg-right-bottom 10vh h-full w-full bg-white items-center justify-center md:justify-center md:items-center lg:w-full lg:justify-center lg:items-center xl:w-full 2xl:w-full">
        <div className="flex flex-col items-center justify-center w-full sm:w-full lg:w-full xl:w-full 2xl:w-full">
          <div className="flex w-full flex-col items-center md:w-full lg:w-full xl:w-full 2xl:w-full lg:mb-10">
            {/* First section */}
            <div className="w-full flex items-center justify-center sm:w-full xl:w-full 2xl:w-full bg-white">
              <div className="lg:h-[60vh] flex flex-col-reverse items-center justify-center w-full sm:flex-col-reverse sm:justify-center sm:w-full sm:items-center sm:mb-12 sm:mt-10 lg:flex-row lg:justify-around lg:w-[140vh] lg:mt-10 lg:mb-0">
                <div className="w-full sm:w-full lg:w-full p-4 sm:text-center sm:flex lg:flex xl:w-3/4 lg:mb-[5vh] xl:mb-[5vh]">
                  <div className="text-wrap sm:flex sm:items-center sm:justify-center lg:flex">
                    {/* paragraph section div */}
                    <div className="lg:w-3/4">
                      <h1 className="text-4xl m-4 sm:m-8 lg:text-5xl text-black font-bold text-center sm:mr-4">
                        Our Way of Success
                      </h1>
                      <p className="pt-8 sm:text-xl px-5 text-black leading-relaxed text-justify sm:ml-4 md:text-center lg:text-justify lg:text-lg xl:5xl 2xl:mb-[12vh]">
                        Explore the extraordinary achievements of CSNE Club
                        members and faculty. From alumni success to innovation
                        and community impact, our Success Stories page showcases
                        the remarkable journeys that have been launched from our
                        club. Get inspired and witness the transformative power
                        of computer science and network engineering.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image of the first section */}
                <Image
                  src={sampleImage}
                  width={600}
                  height={600}
                  alt="success stories"
                  className="w-3/4 border-2 rounded-2xl border-gray-300 shadow-lg sm:mx-8 sm:mt-12 sm:ml-15 sm:w-3/5 lg:w-4/5 lg:mb-[20vh] xl:h-[50vh] xl:w-4/5 2xl:h-[40vh] 2xl:w-[80vh] 2xl:mr-[5vh] 2xl:mt-[10vh]"
                />
              </div>
            </div>

            {/* Second section */}
            <div className="flex flex-col md:w-full lg:w-full xl:w-full 2xl:w-full justify-center items-center mt-5">
              {StoryData?.length > 0 &&
                StoryData.map((story) => {
                  const isExpanded = expandedStories.includes(story.id);
                  return (
                    <div
                      key={story.id}
                      className="flex flex-col md:w-full lg:w-[125vh] xl:w-[145vh] 2xl:w-3/4 mb-10"
                    >
                      <div className="flex flex-col justify-center items-center lg:items-start sm:flex sm:space-x-3 sm:mt-8 lg:flex-row">
                        <Image
                          src={story.image}
                          width={500}
                          height={300}
                          alt="Story image"
                          className="w-4/5 border-2 rounded-2xl mb-10 border-gray-300 shadow-lg sm:mx-8 sm:w-3/5 lg:w-2/6"
                        />
                        <div className="flex flex-col px-10">
                          <p className="lg:text-lg text-justify leading-relaxed text-black sm:w-5/6">
                            {isExpanded
                              ? story.description
                              : getPreviewText(story.description)}
                            {!isExpanded && (
                              <>
                                <span>.</span>
                                <button
                                  onClick={() => toggleExpand(story.id)}
                                  className="text-blue-500 underline ml-1"
                                >
                                  See More
                                </button>
                              </>
                            )}
                          </p>
                          {isExpanded && (
                            <>
                              <button
                                onClick={() => toggleExpand(story.id)}
                                className="mt-2 text-blue-500 underline"
                              >
                                Show Less
                              </button>
                              <br />
                              <p className="font-semibold text-black text-center lg:text-left">
                                {story.name}
                              </p>
                              <p className="font-semibold text-black text-center lg:text-left">
                                {story.designation}
                              </p>
                              <p className="font-semibold text-black text-center lg:text-left">
                                {story.workplace}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
