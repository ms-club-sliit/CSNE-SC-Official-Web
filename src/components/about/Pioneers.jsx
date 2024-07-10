"use client";
import Image from "next/image";


const pioneersData = [
  {
    id: 1,
    src: "/images/about/1.jpeg",
    alt: "image of the pioneer 1",
    name: "Chenuka Lalanga",
    position: "Past President"
  },
  {
    id: 2,
    src: "/images/about/2.jpeg",
    alt: "image of the pioneer 2",
    name: "Ashara Konara",
    position: "Past Vice President"
  },
  {
    id: 3,
    src: "/images/about/3.jpeg",
    alt: "image of the pioneer 3",
    name: "Thamali Munasinghe",
    position: "Past Secretary"
  },
  {
    id: 4,
    src: "/images/about/4.jpeg",
    alt: "image of the pioneer 4",
    name: "Najini Pattiyakumbura",
    position: "Past Treasurer"
  }
];

function Pioneers() {
  return (
    <div className="my-10 xl:my-32 mx-auto">
      <h2 className="text-center text-xl xl:text-5xl font-bold">
        Pioneers of CSNE Student <br /> Community
      </h2>
      <div className="lg:mt-10 w-11/12 overflow-x-scroll scroll-smooth touch-pan-x focus:scroll-auto overflow-hidden flex flex-col sm:flex-row mx-auto mx-auto hide-scrollbar ::-webkit-scrollbar">
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
              <p className="text-sm">{pioneer.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pioneers;
