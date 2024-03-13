import Image from "next/image";
function Stratergy() {
  return (
    <div className="flex flex-col w-11/12 mt-10 mx-auto lg:flex-row-reverse  ">
      <div className="mx-auto lg:w-1/2  mt-4 lg:text-2xl">
        <h2 className="text-center text-xl xl:text-5xl font-bold">
          Our Stratergy
        </h2>
        <p className="text-center text-xl mt-5">
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
  );
}

export default Stratergy;
