import Image from "next/image";
function Mission() {
  return (
    <div className="flex flex-col  w-11/12 mx-auto lg:flex-row-reverse  ">
      <div className="mx-auto lg:w-1/2  mt-8 lg:text-2xl">
        <h2 className="text-center text-xl xl:text-5xl font-bold">
          Our Mission
        </h2>
        <p className="text-center text-lg mt-5">
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
  );
}

export default Mission;
