import React from "react";
import Image from "next/image";

const Stories = () => {
  const sampleImage = "/images/back.png.jpeg";

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
                      <h1 className="text-4xl m-4 sm:m-8 lg:text-6xl text-black font-bold text-center sm:mr-4">
                        Our Way of Success
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
                    src={"/images/stories/3.png"}
                    width={1000}
                    height={1000}
                    alt="Image 2"
                    className="w-4/5 border-2 rounded-2xl   border-gray-300 shadow-lg sm:mx-8  sm:w-3/5 lg:w-2/5 "
                  />

                  <div className="text-base sm:text-xl">
                    <p className="text-base text-justify leading-relaxed text-black  lg:text-lg  p-4 sm:text-xl sm:ml-[9vh] sm:w-5/6">
                      &#34;Choosing the Computer Systems and Network Engineering
                      (CSNE) specialization was not just a decision; it was a
                      declaration of my passion. Despite the gender disparity in
                      the field, I embraced my uniqueness and thrived. Upon
                      completing my internship at Pearson, I joined IFS, where I
                      continued to learn, grow, and contribute to the
                      organization&apos;s success. My journey is a testament to
                      the power of passion, perseverance, and the courage to
                      pursue one&apos;s dreams. If there&apos;s one thing
                      I&apos;ve learned, it&apos;s that success is not just
                      about reaching the destination; it&apos;s about embracing
                      the journey and all the lessons it brings.&rdquo;
                      <br />
                    </p>
                    <div className="text-right mx-20 text-black  italic">
                      - Thamali Munasinghe -
                    </div>
                  </div>
                </div>
                {/* item 2 */}
                <div className="flex flex-col-reverse justify-center  items-center sm:space-y-4 mt-10 sm:flex-col-reverse lg:flex-row lg:mt-16">
                  <div className=" text-base sm:text-xl">
                    <p className="text-base text-justify leading-relaxed text-black  p-4 sm:text-lg sm:ml-[9vh] sm:w-5/6">
                      &#34;Embarking on the path of Computer Systems and Network
                      Engineering (CSNE) was more than just a choice for me; it
                      was a passion ignited by curiosity and a drive for
                      innovation. Despite the demanding nature of the field and
                      the hurdles along the way, I remained steadfast in my
                      commitment to excel. Through rigorous study sessions,
                      hands-on projects, and countless late nights of coding, I
                      transformed challenges into stepping stones for growth.
                      Graduating with top honors from SLIIT University was just
                      the beginning of my journey. Armed with a solid foundation
                      and a hunger for success, I landed a dream job at a
                      renowned tech company, where I swiftly rose through the
                      ranks due to my exceptional performance and dedication.
                      Today, as a leader in the field, I continue to push
                      boundaries, mentor aspiring engineers, and contribute to
                      groundbreaking projects that shape the future of
                      technology. My journey underscores the significance of
                      resilience, determination, and the relentless pursuit of
                      excellence in achieving remarkable success in Computer
                      Systems and Network Engineering.&rdquo;
                    </p>
                    <div className="text-right mx-20 text-black italic">
                      - Lakisuru Semasinghe -
                    </div>
                  </div>

                  <Image
                    src={"/images/stories/2.png"}
                    width={1000}
                    height={1000}
                    alt="Image 3"
                    className="w-4/5 border-2 rounded-2xl border-gray-300 shadow-lg  sm:mx-8  sm:w-3/5 lg:w-2/5"
                  />
                </div>
                {/* item 3 */}
                <div className="flex flex-col justify-center items-center sm:flex  sm:space-y-4 mt-10 lg:flex-row lg:mt-16">
                  <Image
                    src={"/images/stories/1.png"}
                    width={1000}
                    height={1000}
                    alt="Image 4"
                    className="w-4/5 border-2 rounded-2xl border-gray-300 shadow-lg  sm:mx-8  sm:w-3/5 lg:w-2/5"
                  />
                  <div className=" text-xl ">
                    <div className="md:justify-center md:items-center">
                      <p className="text-base text-justify leading-relaxed text-black  p-4 sm:text-lg sm:ml-[9vh] sm:w-5/6 sm:text-justify   lg:text-xl">
                        &#34;Choosing to specialize in Computer Systems and
                        Network Engineering (CSNE) wasn&apos;t just a career
                        path for me; it was a calling. Despite the challenges
                        and complexities of the field, I embraced every
                        opportunity to learn and excel. Throughout my academic
                        journey at SLIIT University, I actively participated in
                        research projects, internships, and extracurricular
                        activities, honing my skills and expanding my knowledge.
                        Upon graduation with flying colors, I secured a coveted
                        position at a leading tech firm, where I immediately
                        made an impact with my expertise and innovative
                        solutions. My journey from student to professional is a
                        testament to the power of dedication, resilience, and
                        the unwavering pursuit of excellence. It&apos;s not just
                        about achieving success; it&apos;s about embracing the
                        challenges, seizing opportunities, and continuously
                        pushing the boundaries of what&apos;s possible in the
                        dynamic world of Computer Systems and Network
                        Engineering.&rdquo;
                      </p>
                      <div className="text-right text-black mx-20 italic">
                        - Thiwanka Cholitha -
                      </div>
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
