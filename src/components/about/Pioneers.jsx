"use client";
import Image from "next/image";


const pioneersData = [
  {
    id: 1,
    src: "/images/about/1.png",
    alt: "image of the pioneer 1",
    name: "Pioneer 1",
    position: "Position 1"
  },
  {
    id: 2,
    src: "/images/about/2.png",
    alt: "image of the pioneer 2",
    name: "Pioneer 2",
    position: "Position 1"
  },
  {
    id: 3,
    src: "/images/about/3.png",
    alt: "image of the pioneer 3",
    name: "Pioneer 3",
    position: "Position 1"
  },
  {
    id: 4,
    src: "/images/about/4.png",
    alt: "image of the pioneer 4",
    name: "Pioneer 4",
    position: "Position 1"
  }
];

function Pioneers() {
  return (
    <div className="my-10 xl:my-32 mx-auto">
      <h2 className="text-center text-xl xl:text-5xl font-bold">
        Pioneers of CSNE Student <br /> Community
      </h2>
      <div className="lg:mt-10 w-11/12 overflow-x-scroll scroll-smooth touch-pan-x focus:scroll-auto overflow-hidden flex flex-col sm:flex-row mx-auto mx-auto hide-scrollbar">
        {pioneersData.map((pioneer) => (
          <div key={pioneer.id} className="flex flex-col items-center mx-4">
            <Image
              className="rounded-xl w-[300px]"
              src={pioneer.src}
              alt={pioneer.alt}
              height={961}
              width={896}
            />
             <div className="text-center mt-2 p-4 bg-gray-100 rounded-lg">
              <p className="text-xl font-bold">{pioneer.name}</p>
              <p className="text-sm">{pioneer.position}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Safari and Chrome */
        }
      `}</style>
    </div>
  );
}

export default Pioneers;
