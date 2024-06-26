import Image from "next/image";
const pioners = [
  {
    id: 1,
    src: "/images/about/1.png",
    alt: "image of the pioneer 1",
  },
  {
    id: 2,
    src: "/images/about/2.png",
    alt: "image of the pioneer 2",
  },
  {
    id: 3,
    src: "/images/about/3.png",
    alt: "image of the pioneer 3",
  },
  {
    id: 4,
    src: "/images/about/4.png",
    alt: "image of the pioneer 4",
  },
];
function Pioneers() {
  return (
    <div className="my-10 xl:my-32 mx-auto">
      <h2 className="text-center text-xl xl:text-5xl font-bold">
        Pioneers of CSNE Student <br /> Community
      </h2>
      <div className="lg:mt-10 w-11/12 overflow-x-scroll scroll-smooth touch-pan-x focus:scroll-auto overflow-hidden flex flex-col sm:flex-row mx-auto">
        {pioners.map((pioneer) => {
          return (
            <Image
              className=" mx-4 rounded-xl w-[300px] "
              key={pioneer.id}
              src={pioneer.src}
              alt={pioneer.alt}
              height={961}
              width={896}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pioneers;
