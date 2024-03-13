import Header from "@/components/about/Header";
import Pioneers from "@/components/about/Pioneers";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import Stratergy from "@/components/about/Stratergy";
const About = () => {
  return (
    <div className="bg-white min-h-screen w-full relative overflow-hidden p-7  text-black">
      <div className=" z-0 fixed rounded-s-full -rotate-[29deg] bg-gradient-to-r to-[#4CC9F000] top-1/4 left-10  from-[#4361EE4D]  w-[500.77px] h-[500.71px]"></div>
      <div className=" z-10  relative w-full flex flex-col">
        <Header />
        <Pioneers />
        <Mission />
        <Vision />
        <Stratergy />
      </div>
    </div>
  );
};

export default About;
