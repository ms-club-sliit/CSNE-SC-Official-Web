import Image from "next/image";
import YearDropDown from "./YearDropDown";


const EventHero = () => {
    return (

        <div>
            <section
                className="w-screen h-screen bg-no-repeat bg-top-[100%] bg-right-[50%] bg-[150%] hidden md:block"
                style={{
                    // width: "100vw",
                    // height: "100vh",
                    backgroundImage: `url(/static/event-bg.svg)`,
                    backgroundRepeat: 'no-repeat', backgroundSize: '150%',
                    backgroundPosition: 'top 100% right 50%'
                }}>
                {/* <section className="w-screen h-screen bg-no-repeat bg-top-[100%] bg-right-[50%] bg-[150%] bg-[url(/static/event-bg.svg)]">< */}


                <div className="container mr-auto ml-auto">
                    <div className="text-right">
                        <YearDropDown />
                    </div>

                    <div className="sm:flex">
                        <div className="m-5">
                            <h1 className="text-left text-6xl font-semibold mb-5 text-slate-800 antialiased">Explore Events</h1>
                            <p className="ztext-left text-4xl mb-2 text-slate-900 antialiased">Explore all the events organized by</p>
                            <p className="text-left text-4xl text-slate-800 antialiased">our students</p>
                        </div>

                        <div className="absolute md:bottom-14 lg:bottom-0  lg:top-22 xl:right-[400px] right-40 ">
                            <div className="relative top-8 left-40 xl:left-[400px]">
                                <Image className="rounded-lg shadow-lg md:w-[280px] lg:w-[380px] xl:w-[520px]" alt={""} src={`/images/upcoming.jpg`} layout="intrinsic" width={400} height={220} />
                            </div>

                            <div className="relative xl:right-41">
                                <Image className="rounded-lg shadow-lg md:w-[400px] lg:w-[500px] xl:w-[800px]" alt={""} src={`/images/group.jpg`} layout="intrinsic" width={500} height={300} />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section
                className="w-screen h-[90vh] bg-no-repeat bg-top-[100%] bg-right-[50%] bg-[150%] xs:block sm:block md:hidden"

                style={{
                    backgroundImage: `url(/static/event-bg.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top 0% right 48%'
                }}>
                {/* <section className="w-screen h-screen bg-no-repeat bg-top-[100%] bg-right-[50%] bg-[150%] bg-[url(/static/event-bg.svg)]">< */}

                <div className="p-5">

                    <h1 className="text-left text-5xl font-semibold mb-5 text-slate-800 antialiased">Explore Events</h1>
                    <p className="text-left text-3xl mb-2 text-slate-700 antialiased">Explore all the events organized by our students</p>

                    <div className="text-left">
                        <YearDropDown />
                    </div>

                    <div className="oveflow-x-hidden absolute right-[10px] bottom-[-10]">
                        <div className="absolute">
                            <div className=" relative left-10">
                                <Image className="rounded-lg shadow-lg" alt={""} src={`/images/upcoming.jpg`} layout="intrinsic" width={200} height={100} />
                            </div>
                        </div>

                        <div className="relative top-32 right-20">
                            <Image className="rounded-lg shadow-l" alt={""} src={`/images/group.jpg`} layout="intrinsic" width={270} height={200} />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default EventHero