import React from "react";
import Image from "next/image";

const Stories = () => {
  const sampleImage = "https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-hand-holding-megaphone-with-success-stories-png-image_4667189.png";
  const sampleImage2 = "https://tacso.eu/wp-content/uploads/2020/12/success-stories-1.png";
  const backgroundImageUrl = "/images/backgroundimg.png";


  return (
    <div className="flex items-center justify-center">
      <div className="h-full bg-white flex items-center justify-center p-2 sm:p-0">
        <div className="flex flex-col items-center justify-center  w-full sm:w-3/4  ">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col-reverse  items-center justify-center w-full  sm:flex-col-reverse sm:justify-center  sm:items-center lg:flex-row lg:justify-around">
             
              <div className="w-full sm:w-3/3 lg:w-1/2 p-4  sm:text-center sm:flex lg:flex ">


              <div className="text-wrap ... sm:flex sm:items-center sm:justify-center lg:flex ">
                <div>
                  <h1 className="text-4xl sm:text-4xl m-4 sm:m-8 lg:text-6xl text-black font-bold text-center sm:mr-4">Our way of success</h1>
  <p className="text-base sm:text-xl text-black leading-relaxed text-justify sm:ml-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rerum sapiente quaerat esse repellat quos exercitationem laboriosam nostrum eum. Suscipit maiores voluptatem deleniti, quod beatae consequuntur aliquid dolore magnam explicabo.</p>
</div>
  </div>

</div>

              <Image
                src={sampleImage}
                width={600}
                height={600}
                alt="success stories"
                className="w-3/4 border-2 rounded-2xl border-gray-300 shadow-lg  sm:mx-8 sm:mt-12 sm:ml-15  "
              />
            </div>

            <div className="flex flex-col" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: '60%', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', width: '100%' }}>

              <div className="flex flex-col justify-center items-center sm:flex  space-y-4 sm:space-x-3 sm:mt-8 lg:flex-row lg:mt-16">
                <Image src={sampleImage2} width={500} height={500} alt="Image 2" className="w-4/5 border-2 rounded-2xl   border-gray-300 shadow-lg sm:mx-8 lg:w-4/5 " />
                <div className="text-base sm:text-xl">
                  <p className="text-base text-justify leading-relaxed text-black  p-4 sm:text-xl sm:ml-8 sm:w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere. Tempora aliquam illum incidunt sequi facilis optio architecto minus eaque accusamus dolorum. Illum fuga vero aperiam dolor, alias vitae dolorem.</p>
                </div>
              </div>

              <div className="flex flex-col-reverse justify-center  items-center sm:space-y-4 mt-10 sm:flex-col-reverse lg:flex-row">
                <div className=" text-base sm:text-xl">
                  <p className="text-base text-justify leading-relaxed text-black  p-4 sm:text-xl sm:ml-8 sm:w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere. Tempora aliquam illum incidunt sequi facilis optio architecto minus eaque accusamus dolorum. Illum fuga vero aperiam dolor, alias vitae dolorem.</p>
                </div>
                
                <Image src={sampleImage2} width={500} height={500} alt="Image 3" className="w-4/5 border-2 rounded-2xl border-gray-300 shadow-lg  sm:mx-8" />
              </div>

              <div className="flex flex-col justify-center items-center sm:flex  sm:space-y-4 mt-10 lg:flex-row">
                <Image src={sampleImage2} width={500} height={500} alt="Image 4" className="w-4/5 border-2 rounded-2xl border-gray-300 shadow-lg  sm:mx-8" />
                <div className="text-base text-xl">
                  <p className="text-base text-justify leading-relaxed text-black  p-4 sm:text-xl sm:ml-8 sm:w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere. Tempora aliquam illum incidunt sequi facilis optio architecto minus eaque accusamus dolorum. Illum fuga vero aperiam dolor, alias vitae dolorem. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
