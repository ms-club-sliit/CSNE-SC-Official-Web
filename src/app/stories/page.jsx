"use client";
import React from "react";
import Image from "next/image";

const Stories = () => {
  const sampleImage="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-hand-holding-megaphone-with-success-stories-png-image_4667189.png";
  const sampleImage2="https://tacso.eu/wp-content/uploads/2020/12/success-stories-1.png"
  const backgroundImageUrl="/images/backgroundimg.png"
  return (
    <div className="flex items-center justify-center m-0 p-0">
        <div className="container h-[200vh]  bg-white flex items-center justify-center m-0 p-0">
        <div className="flex flex-col items-center justify-center space-y-10 ">
          <div className="flex flex-col items-center space-y-4">
          
          <div className="flex flex-row justify-between">
  <div className=" ml-2 basis-2/5 w-1/4 p-4 ">
  
<article class="text-nowrap ...">
  <h3 className="text-6xl m-8 text-black font-bold text-center">Our way of success</h3>
  <p className="text-xl text-black leading-relaxed text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum rerum sapiente quaerat esse repellat quos exercitationem laboriosam nostrum eum. Suscipit maiores voluptatem deleniti, quod beatae consequuntur aliquid dolore magnam explicabo.</p>
</article>
    {/* <h1 className="text-4xl  text-black font-bold">Our way of success</h1>
    <p className="text-xl text-black leading-relaxed text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere. Tempora aliquam illum incidunt sequi facilis optio architecto minus eaque accusamus dolorum. Illum fuga vero aperiam dolor, alias vitae dolorem.</p>
  */}
  </div>
  
  <Image
    src={sampleImage}
    width={600}
    height={600}
    alt="success stories"
    className=" mr-10 border-2 rounded-2xl border-gray-300 shadow-lg "
  />
</div>
<div className="flex flex-col" style={{backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: '60%', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', width: '100%'}} >

 <div className="flex  items-center space-y-4 mt-10">
            <Image src={sampleImage2} width={500} height={500} alt="Image 2" className="basis-4/5 border-2 rounded-2xl border-gray-300 shadow-lg ml-8"/>
            <div className="text-xl">
            <p className="text-xl text-black ml-16 w-5/6 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere. Tempora aliquam illum incidunt sequi facilis optio architecto minus eaque accusamus dolorum. Illum fuga vero aperiam dolor, alias vitae dolorem.</p>

            </div>
          </div>

          <div className="flex  items-center space-y-4 mt-10">
             <div className="text-xl">
            <p className=" text-black ml-16 w-5/6 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere. Tempora aliquam illum incidunt sequi facilis optio architecto minus eaque accusamus dolorum. Illum fuga vero aperiam dolor, alias vitae dolorem.</p>

            </div>
            <Image src={sampleImage2} width={500} height={500} alt="Image 3" className="basis-4/5 border-2 rounded-2xl border-gray-300 shadow-lg mr-8 " />
           
          </div>

          <div className="flex items-center space-y-4 mt-10">
            <Image src={sampleImage2} width={500} height={500} alt="Image 4" className="basis-4/5 border-2 rounded-2xl border-gray-300 shadow-lg ml-8" />
            <div className="text-xl">
            <p className=" text-black ml-16 w-5/6 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere. Tempora aliquam illum incidunt sequi facilis optio architecto minus eaque accusamus dolorum. Illum fuga vero aperiam dolor, alias vitae dolorem. </p>
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