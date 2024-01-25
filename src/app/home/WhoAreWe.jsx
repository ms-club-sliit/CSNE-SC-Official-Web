"use client";
import CSNESCLogo from "../assets/images/csnesc-logo.png";
import President from "../assets/images/committee/president.png";
import VicePresident from "../assets/images/committee/vice-president.png";
import SampleUser from "../assets/images/committee/sample-user.png";

const WhoAreWe = () => {
  return (
    <>
      <div className="text-4xl font-bold text-center">Who are we?</div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center mt-[50px]">
          <img
            src={CSNESCLogo.src}
            className="max-w-[320px] xl:max-w-[400px] h-auto lg:translate-y-[-100px]"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 max-w-[380px] items-center text-[#565656] mt-[50px] md:mt-[20px]">
          <p>
            CSNE Club of SLIIT is a community group to support students in their
            quest of being a significant IT Professional.
          </p>
          <p>
            We encourage a peer-to-peer learning environment to faciliate an
            organic growth of knowledge. Our members are volunteers who aim to
            provide value back to their community.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 relative flex justify-center items-center min-h-[400px]">
          <div className="w-[100px] h-[100px] rounded-full absolute z-50 overflow-hidden">
            <img className="object-cover w-full h-full" src={President.src} />
          </div>
          <div className="w-[90px] h-[90px] rounded-full absolute animate-north-west overflow-hidden z-40">
            <img
              className="object-cover w-full h-full"
              src={VicePresident.src}
            />
          </div>
          <div className="w-[90px] h-[90px] rounded-full absolute animate-south overflow-hidden z-40">
            <img className="object-cover w-full h-full" src={SampleUser.src} />
          </div>
          <div className="w-[60px] h-[60px] rounded-full absolute animate-north overflow-hidden">
            <img className="object-cover w-full h-full" src={SampleUser.src} />
          </div>
          <div className="w-[60px] h-[60px] rounded-full absolute animate-south-west overflow-hidden">
            <img className="object-cover w-full h-full" src={SampleUser.src} />
          </div>
          <div className="w-[60px] h-[60px] rounded-full absolute animate-north-east overflow-hidden">
            <img className="object-cover w-full h-full" src={SampleUser.src} />
          </div>
          <div className="w-[50px] h-[50px] rounded-full absolute animate-east overflow-hidden">
            <img className="object-cover w-full h-full" src={SampleUser.src} />
          </div>
          <div className="w-[50px] h-[50px] rounded-full absolute animate-south-east overflow-hidden">
            <img className="object-cover w-full h-full" src={SampleUser.src} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAreWe;
