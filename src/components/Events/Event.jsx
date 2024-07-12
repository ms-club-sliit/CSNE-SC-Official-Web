import Image from "next/image";

const Event = ({ event, element }) => {
  const { name, desc, alt, image } = event;

  const order = element % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";
  const text_align = element % 2 === 0 ? "text-left" : "text-right";

  return (
    <div>
      <div
        className={`gap-5 lg:gap-16 flex flex-col ${order} items-center mb-10 mt-10 p-5 lg:p-10`}
      >
        <h2 className="text-2xl lg:text-3xl subpixel-antialiased font-semibold text-slate-800 sm:block md:hidden text-center lg:text-left">
          {name}
        </h2>

        <div className="relative w-full aspect-[4/3] lg:w-1/2">
          <Image
            className="rounded-lg shadow-lg"
            sizes="(max-width: 200px) 100vw, 100px"
            alt={alt}
            src={`/images/${image}`}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="lg:w-2/3">
          <div>
            <h2
              className={`text-3xl subpixel-antialiased font-semibold mb-4 text-slate-800 hidden md:block ${text_align}`}
            >
              {name}
            </h2>
            <p
              className={`text-justify text-slate-700 lg:text-lg ${text_align}`}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
