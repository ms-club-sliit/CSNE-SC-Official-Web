import React from "react";
import HeroSection from "@/components/HeroSection";
import WhoAreWe from "@/components/WhoAreWeSection";
import SubscribeSection from "@/components/SubscribeSection";
import PastEventsSection from "@/components/PastEventsSection";

const Home = () => {

    // past events
    const pastEvents = [
        {id: 1, image: "/images/past-events/agm-23.jpg", title: "AGM-2023", description: "CSNE student committee", url: "https://google.com"},
        {id: 2, image: "/images/past-events/netcom.png", title: "Netcom", description: "Grand Finale", url: ""},
        {id: 3, image: "/images/past-events/dansela.jpg", title: "CSNE Dansala", description: "CSNE student community", url: ""},
    ];

    return (
        <div className="flex items-center justify-center">
            <div className="text-black flex flex-col w-full">
                <HeroSection/>
                <WhoAreWe/>
                <PastEventsSection pastEvents={pastEvents}/>
                <SubscribeSection/>
            </div>
        </div>
    );
};

export default Home;
