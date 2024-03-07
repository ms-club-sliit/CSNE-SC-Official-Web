
import { Events21, Events23, Events22, Events24 } from "@/data/data"
import Event from "./Event";

const eventsByYear = {
    2021: Events21,
    2022: Events22,
    2023: Events23,
    2024: Events24,
};

const Events = ({ year }) => {

    const events = eventsByYear[year];

    const currentYear = new Date().getFullYear();
    console.log(currentYear)

    return (
        <section className="container ml-auto mr-auto">

            {
                events.length !== 0 ? events?.map((event, key) => <Event element={key} key={key} event={event} />) : (year == currentYear) ? <p className="text-2xl text-center mb-4"> Stay Tuned More Events Will Be Available in The Futrue</p> : <p className="text-2xl text-center mb-4">{year} {currentYear}No Events are Available</p>
            }

        </section>

    )
}

export default Events;