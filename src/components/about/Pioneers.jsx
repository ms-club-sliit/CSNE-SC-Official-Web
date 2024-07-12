"use client";
import Image from "next/image";
import pioneersData from "../../data/about/pioneers.json"

function Pioneers() {
  return (
    <div className="my-10 xl:my-32 mx-auto">
      <h2 className="text-center text-xl xl:text-5xl font-bold">
        Pioneers of CSNE Student <br /> Community
      </h2>
      <div className="mt-5 lg:mt-10 w-11/12 overflow-x-scroll scroll-smooth touch-pan-x focus:scroll-auto overflow-hidden flex flex-col sm:flex-row mx-auto mx-auto hide-scrollbar">
        {pioneersData.map((pioneer) => (
          <div key={pioneer.id} className="flex flex-col items-center mx-4">
            <Image
              className="rounded-xl w-[300px]"
              src={pioneer.src}
              alt={pioneer.alt}
              height={961}
              width={896}
            />
            
             <div className="text-center mt-2 p-4 text-black rounded-lg">
              <p className="text-xl font-bold">{pioneer.name}</p>
              <p className="text-lg">{pioneer.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pioneers;
