import Image from "next/image";
import YearDropDown from "./YearDropDown";

const EventHero = () => {
  return (
    <>
      <section
        className="w-screen h-screen bg-no-repeat bg-top-[100%] bg-right-[50%] bg-[150%] hidden md:block"
        style={{
          backgroundImage: `url(/static/event-bg.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "150%",
          backgroundPosition: "top 100% right 50%",
        }}
      >
        <div className="container mr-auto ml-auto">
          <div className="text-right">
            <YearDropDown />
          </div>

          <div className="sm:flex">
            <div className="m-5 xl:ml-20">
              <h1 className="text-left text-5xl font-semibold mb-5 text-slate-800 antialiased">
                Explore Events
              </h1>
              <p className="ztext-left text-3xl mb-2 text-slate-900 antialiased">
                Explore all the events organized by <br />
                our students
              </p>
            </div>

            <div className="absolute md:bottom-14 lg:bottom-0 lg:top-22 xl:top-28 xl:right-[400px] right-40 ">
              <div className="relative top-8 left-40 xl:left-[400px]">
                <Image
                  className="rounded-lg shadow-lg md:w-[280px] lg:w-[380px] xl:w-[25vw]"
                  alt={"upcoming event"}
                  src={`/images/upcoming.jpg`}
                  layout="intrinsic"
                  width={400}
                  height={220}
                />
              </div>

              <div className="relative xl:right-[200px]">
                <Image
                  className="rounded-lg shadow-lg md:w-[400px] lg:w-[500px] xl:w-[36vw]"
                  alt={"group photo"}
                  src={`/images/group.jpg`}
                  layout="intrinsic"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-screen h-[60vh] lg:h-[90vh] bg-no-repeat bg-top-[100%] bg-right-[50%] bg-[150%] xs:block sm:block md:hidden"
        style={{
          backgroundImage: `url(/static/event-bg.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top 0% right 48%",
        }}
      >
        <div className="p-5">
          <h1 className="text-center text-3xl font-semibold lg:mb-5 text-slate-800 antialiased">
            Explore Events
          </h1>
          <p className="text-center text-xl mb-2 text-slate-700 antialiased">
            Explore all the events organized by our students
          </p>

          <div className="text-right">
            <YearDropDown />
          </div>

          <div className="oveflow-x-hidden absolute right-[10px] bottom-[-10]">
            <div className="absolute">
              <div className=" relative left-10">
                <Image
                  className="rounded-lg shadow-lg"
                  alt={"upcoming event"}
                  src={`/images/upcoming.jpg`}
                  layout="intrinsic"
                  width={200}
                  height={100}
                />
              </div>
            </div>

            <div className="relative top-32 right-20">
              <Image
                className="rounded-lg shadow-l"
                alt={"group photo"}
                src={`/images/group.jpg`}
                layout="intrinsic"
                width={270}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventHero;
