import eventData from "@/data/events/Events";
import Event from "./Event";
import Image from "next/image";

// const eventsByYear = {
//   2021: Events21,
//   2022: Events22,
//   2023: Events23,
//   2024: Events24,
// };

const Events = ({ year }) => {
  //This will get all the years in the Events.json file in order ['2022','2023','2024']
  const years = Object.keys(eventData);
  //This will get the latest year
  const latestYear = years[years.length - 1];
  //If no any year passed as props then latest year will display 
  //const events = eventData[year ? year : latestYear];
  const events = eventData[year] && eventData[year].length > 0 ? eventData[year] : eventData[latestYear];
  //const currentYear = new Date().getFullYear();

  return (
    <section className="container ml-auto mr-auto p-4 sm:p-4 md:p-4 lg:p-0 xl:p-0">
      <hr class="container h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <h2 className="text-3xl font-semibold text-center">
        Check out the amazing experiences we shared{" "}
        <span className="text-[#1D1163]">{eventData[year] && eventData[year].length > 0 ? year : latestYear}</span> at{" "}
        <span>
          {" "}
          <Image
            className="inline align-middle"
            alt="csne logo"
            width={100}
            height={100}
            src={"/static/csnesc-logo.png"}
          />
        </span>
      </h2>

      {events && events.length !== 0 ? (
        events?.map((event, key) => (
          <Event element={key} key={key} event={event} />
        ))
      ) : ("")
      // : year == currentYear ? (
      //   <p className="text-2xl text-center pb-12 pt-10 text-[#1D1163]">
      //     {" "}
      //     Stay Tuned More Events Will Be Available In The Futrue
      //   </p>
      // ) : (
      //   <p className="text-2xl text-center pb-12 pt-10 text-[#1D1163]">
      //     {year} No Events Are Available
      //   </p>
      // )
      }
    </section>
  );
};

export default Events;
