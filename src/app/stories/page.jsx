import React from "react";
import Image from "next/image";

const Stories = () => {
  const sampleImage = "/images/back.png.jpeg";
  const sampleImage2 = "/images/success-stories-1.png";

  return (
    <div className=" flex w-full items-center justify-center">
      <div className=" bg-[url(/images/backgroundimg.png)] bg-no-repeat sm:bg-contain md:bg-cover lg:bg-cover 2xl:bg-right-bottom 10vh  h-full w-full bg-white  items-center justify-center   md:justify-center md:items-center lg:w-full lg:justify-center lg:items-center xl:w-full 2xl:w-full lg:mb-16">
        <div className=" flex flex-col items-center justify-center  w-full sm:w-full lg:w-full  xl:w-full 2xl:w-full ">
          <div className=" flex w-full flex-col items-center md:w-full lg:w-full xl:w-full 2xl:w-full  lg:mb-10">
            {/* First section */}
            <div className="w-full flex items-center justify-center sm:w-full xl:w-full 2xl:w-full  bg-white">
              <div className="h-[70vh] flex flex-col-reverse  items-center justify-center w-full  sm:flex-col-reverse sm:justify-center sm:w-full sm:items-center sm:mb-12 sm:mt-10 lg:flex-row lg:justify-around lg:w-[140vh] lg:mt-10 lg:mb-0">
                <div className="w-full sm:w-full lg:w-full p-4  sm:text-center sm:flex lg:flex  xl:w-3/4 lg:mb-[5vh] xl:mb-[5vh]">
                  <div className="text-wrap sm:flex sm:items-center sm:justify-center lg:flex ">
                    {/* paragraph section div */}
                    <div className="lg:w-3/4 ">
                      <h1 className="text-5xl sm:text-4xl m-4 sm:m-8 lg:text-8xl text-black font-bold text-center sm:mr-4 xl:6xl ">
                        Our way of success
                      </h1>
                      <p className="text-base pt-8 sm:text-xl text-black leading-relaxed text-justify sm:ml-4 md:text-center lg:text-center lg:text-lg xl:5xl 2xl:mb-[12vh]">
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
                  className="w-3/4 border-2 rounded-2xl border-gray-300 shadow-lg  sm:mx-8 sm:mt-12 sm:ml-15  sm:w-3/5 lg:w-4/5 lg:mb-[20vh]  xl:h-[50vh] xl:w-4/5  2xl:h-[40vh] 2xl:w-[80vh] 2xl:mr-[5vh] 2xl:mt-[10vh]"
                />
              </div>
            </div>

            {/* Second section */}
            <div className="flex flex-col md:w-full  lg:w-full xl:w-full 2xl:w-full justify-center items-center">
              {/* item 1 */}
              <div className="flex flex-col md:w-full  lg:w-[125vh]  xl:w-[145vh] 2xl:w-3/4 ">
                <div className="flex flex-col justify-center items-center sm:flex  space-y-4 sm:space-x-3 sm:mt-8 lg:flex-row ">
                  <Image
                    src={sampleImage2}
                    width={500}
                    height={300}
                    alt="Image 2"
                    className="w-4/5 border-2 rounded-2xl   border-gray-300 shadow-lg sm:mx-8  sm:w-3/5 lg:w-2/5 "
                  />

                  <div className="text-base sm:text-xl">
                    <p className="text-base text-justify leading-relaxed text-black  lg:text-lg  p-4 sm:text-xl sm:ml-[9vh] sm:w-5/6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed nec augue non libero varius sagittis. Nulla tincidunt
                      vestibulum libero, in eleifend risus laoreet ut. Nulla
                      facilisi. Donec ac nisl ut arcu dignissim dictum. Praesent
                      lacinia diam ac augue fringilla, vel mattis quam vehicula.
                      In non est tellus. Integer sit amet bibendum sem. Nulla
                      euismod justo a ligula hendrerit, in interdum justo
                      laoreet.
                    </p>
                  </div>
                </div>
                {/* item 2 */}
                <div className="flex flex-col-reverse justify-center  items-center sm:space-y-4 mt-10 sm:flex-col-reverse lg:flex-row lg:mt-16">
                  <div className=" text-base sm:text-xl">
                    <p className="text-base text-justify leading-relaxed text-black  p-4 sm:text-xl sm:ml-[9vh] sm:w-5/6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed nec augue non libero varius sagittis. Nulla tincidunt
                      vestibulum libero, in eleifend risus laoreet ut. Nulla
                      facilisi. Donec ac nisl ut arcu dignissim dictum. Praesent
                      lacinia diam ac augue fringilla, vel mattis quam vehicula.
                      In non est tellus. Integer sit amet bibendum sem. Nulla
                      euismod justo a ligula hendrerit, in interdum justo
                      laoreet.
                    </p>
                  </div>

                  <Image
                    src={sampleImage2}
                    width={500}
                    height={500}
                    alt="Image 3"
                    className="w-4/5 border-2 rounded-2xl border-gray-300 shadow-lg  sm:mx-8  sm:w-3/5 lg:w-2/5"
                  />
                </div>
                {/* item 3 */}
                <div className="flex flex-col justify-center items-center sm:flex  sm:space-y-4 mt-10 lg:flex-row lg:mt-16">
                  <Image
                    src={sampleImage2}
                    width={500}
                    height={500}
                    alt="Image 4"
                    className="w-4/5 border-2 rounded-2xl border-gray-300 shadow-lg  sm:mx-8  sm:w-3/5 lg:w-2/5"
                  />
                  <div className=" text-xl ">
                    <div className="md:justify-center md:items-center">
                      <p className="text-base text-justify leading-relaxed text-black  p-4 sm:text-xl sm:ml-[9vh] sm:w-5/6 sm:text-justify   lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nec augue non libero varius sagittis. Nulla
                        tincidunt vestibulum libero, in eleifend risus laoreet
                        ut. Nulla facilisi. Donec ac nisl ut arcu dignissim
                        dictum. Praesent lacinia diam ac augue fringilla, vel
                        mattis quam vehicula. In non est tellus. Integer sit
                        amet bibendum sem. Nulla euismod justo a ligula
                        hendrerit, in interdum justo laoreet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
