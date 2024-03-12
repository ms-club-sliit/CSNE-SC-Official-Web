import Image from "next/image";
function Stratergy() {
  return (
    <div className="flex flex-col w-11/12 mx-auto lg:flex-row-reverse  ">
      <div className="mx-auto lg:w-1/2  mt-20 lg:text-2xl">
        <h2 className="text-center text-xl xl:text-5xl font-bold">
          Our Stratergy
        </h2>
        <p className="text-center mt-5">
          Initiate projects, workshops and competitions to expose club members
          to various technologies, concepts and ideas.
        </p>
      </div>
      <Image
        src={"/images/about/stratergy.png"}
        className=""
        width={545}
        height={410}
      />
    </div>
  );
}

export default Stratergy;
