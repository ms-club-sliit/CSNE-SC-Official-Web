import Image from "next/image";
function Mission() {
  return (
    <div className="flex flex-col w-11/12 mx-auto lg:flex-row-reverse  ">
      <div className="mx-auto lg:w-1/2  mt-20 lg:text-2xl">
        <h2 className="text-center text-xl xl:text-5xl font-bold">
          Our Mission
        </h2>
        <p className="text-center mt-5">
          We aim to inspire young minds to be a better version of themselves by
          improving their technical and soft skills.
        </p>
      </div>
      <Image
        src={"/images/about/mission.png"}
        className=""
        width={545}
        height={410}
      />
    </div>
  );
}

export default Mission;
