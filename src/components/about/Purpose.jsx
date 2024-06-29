import React from 'react'
import Image from "next/image";

const Purpose = () => {
    return (
        <div>
            <div className="flex flex-col w-11/12 mx-auto Mission lg:flex-row-reverse ">
                <div className="mx-auto mt-8 lg:w-1/2 lg:text-2xl">
                    <h2 className="text-xl font-bold text-center xl:text-5xl">
                        Our Mission
                    </h2>
                    <p className="mt-5 text-lg text-center">
                        Our mission is to empower Computer Systems and Network Engineering
                        students at SLIIT University by organizing educational events led by
                        industry experts, facilitating study support sessions, promoting
                        collaboration and networking opportunities, encouraging innovation and
                        research, and providing career guidance and professional development,
                        all aimed at fostering a thriving community where students can excel
                        academically and prepare for successful careers in the field.
                    </p>
                </div>
                <Image
                    alt="missionImage"
                    src={"/images/about/vision.png"}
                    className=""
                    width={545}
                    height={410}
                />
            </div>
            <div className="flex flex-col w-11/12 mx-auto vision lg:flex-row ">
                <div className="mx-auto mt-20 lg:w-1/2 lg:text-2xl">
                    <h2 className="text-xl font-bold text-center xl:text-5xl">
                        Our Vision
                    </h2>
                    <p className="mt-5 text-center">
                        To cultivate a thriving community of Computer Systems and Network
                        Engineering students at SLIIT University, fostering innovation,
                        collaboration, and excellence in the field.
                    </p>
                </div>
                <Image
                    alt="visionImage"
                    src={"/images/about/mission.png"}
                    className=""
                    width={545}
                    height={410}
                />
            </div>
            <div className="flex flex-col w-11/12 mx-auto mt-10 stratergy lg:flex-row-reverse ">
                <div className="mx-auto mt-4 lg:w-1/2 lg:text-2xl">
                    <h2 className="text-xl font-bold text-center xl:text-5xl">
                        Our Stratergy
                    </h2>
                    <p className="mt-5 text-xl text-center">
                        Our strategy centers on setting clear, SMART goals aligned with our
                        vision and mission, understanding student needs, collaborating with
                        industry partners, leveraging technology for outreach, empowering
                        student leaders, prioritizing continuous improvement, promoting
                        diversity and inclusion, and monitoring progress to ensure effective
                        empowerment, collaboration, and academic and career development within
                        the community.
                    </p>
                </div>
                <Image
                    alt="strategyImage"
                    src={"/images/about/stratergy.png"}
                    className=""
                    width={545}
                    height={410}
                />
            </div>
        </div>
    )
}

export default Purpose