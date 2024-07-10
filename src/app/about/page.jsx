import Header from "@/components/about/Header";
import Pioneers from "@/components/about/Pioneers";
import Card from "@/components/about/Card";
import aboutData from "@/data/About/About.json";

const About = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-black bg-white p-7">
      <div className=" fixed rounded-s-full -rotate-[29deg] bg-gradient-to-r to-[#4CC9F000] top-1/4 left-10  from-[#4361EE4D]  w-[500.77px] h-[500.71px]"></div>
      <div className="relative flex flex-col w-full ">
        <Header />
        <Pioneers />
        <Card title={aboutData.Mission.title} desc={aboutData.Mission.desc} image={aboutData.Mission.image}/>
        <Card title={aboutData.Vision.title} desc={aboutData.Vision.desc} image={aboutData.Vision.image}/>
        <Card title={aboutData.Strategy.title} desc={aboutData.Strategy.desc} image={aboutData.Strategy.image}/>
      </div>
    </div>
  );
};

export default About;
