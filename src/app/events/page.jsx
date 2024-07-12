import EventHero from "@/components/Events/EventHero";
import Events from "@/components/Events/Events";

const Page = () => {
  return (
    <>
      <div className=" bg-[#FEFEFE] text-zinc-900 ">
        <div>
          <EventHero />
          <Events />
        </div>
      </div>
    </>
  );
};

export default Page;
