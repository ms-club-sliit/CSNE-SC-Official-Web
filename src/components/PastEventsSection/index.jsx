import React from "react";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";

const PastEventsSection = ({pastEvents}) => {
    return (
        <div className="py-10">
            <div className="text-4xl lg:text-5xl font-bold text-center lg:text-left lg:ml-24 mb-12">
                Past Events
            </div>
            <div className="lg:ml-24 min-h-[300px] pr-4 pl-4">
                <ImageCarousel slides={pastEvents}/>
            </div>
        </div>
    );
};

export default PastEventsSection;
