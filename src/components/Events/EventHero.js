import Image from "next/image";
import YearDropDown from "./YearDropDown";

const EventHero = () => {
    return (
        <section
            className="container"
            style={{
                height: "100vh",
                backgroundImage: `url(/static/event-bg.svg)`,
                backgroundSize: "120px",
                backgroundRepeat: 'no-repeat', backgroundSize: '150%',
                backgroundPosition: 'top 100% right 50%'
            }}>

            <div className="text-right">
                <YearDropDown />
            </div>


            <div className="flex h-full grow">
                <div className="w-full m-5">
                    <h1 className="text-6xl font-semibold mb-5 text-center">Explore Events</h1>
                    <p className="text-4xl text-center">Explore all the events organized by our students </p>
                </div>


                <div className="flex-2 w-full h-full content-center" >

                    <div className="relative right-[-230px] top-5">
                        <Image className="rounded-lg shadow-lg" alt={""} src={`/images/upcoming.jpg`} width={400} height={500} style={{
                            objectFit: "fit"
                        }} />
                    </div>

                    <div className="aspect-[16/10] relative left-0 right-0">
                        <Image className="rounded-lg shadow-lg" alt={""} src={`/images/group.jpg`} width={500} height={600} style={{
                            objectFit: "fit"
                        }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventHero