import Image from "next/image";
function Vision() {
  return (
    <div className="flex flex-col w-11/12 mx-auto lg:flex-row  ">
      <div className="mx-auto lg:w-1/2  mt-20 lg:text-2xl">
        <h2 className="text-center text-xl xl:text-5xl font-bold">
          Our Vision
        </h2>
        <p className="text-center mt-5">
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
  );
}

export default Vision;
