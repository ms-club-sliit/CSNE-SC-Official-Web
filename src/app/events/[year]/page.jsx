import EventHero from "@/components/Events/EventHero";
import Events from "@/components/Events/Events";

const Page = ({ params }) => {
  return (
    <>
      <div className=" bg-[#FEFEFE] text-zinc-900 ">
        <div>
          <EventHero />
          <Events year={params.year ? params.year : 2023} />
        </div>
      </div>
    </>
  );
};

export default Page;
