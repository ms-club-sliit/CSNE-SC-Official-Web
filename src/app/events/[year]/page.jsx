import EventHero from "@/components/Events/EventHero";
import Events from "@/components/Events/Events";

const Page = ({ params }) => {

  return (
    <>
      <div className=" bg-[#FEFEFE] text-zinc-900 ">
        <div>
          <EventHero />
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <Events year={params.year} />
        </div>
      </div>
    </>
  );
};

export default Page;
