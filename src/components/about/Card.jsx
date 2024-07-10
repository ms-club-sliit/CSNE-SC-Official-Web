import React from 'react'
import Image from 'next/image'

export const Card = ({title, desc, image}) => {
  return (
    <div className="flex flex-col w-11/12 mx-auto lg:flex-row-reverse ">
      <div className="mx-auto mt-8 lg:w-1/2 lg:text-2xl">
        <h2 className="text-xl font-bold text-center xl:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-lg text-center">
          {desc}
        </p>
      </div>
      <Image
        alt={image.alt}
        src={image.src}
        width={image.width}
        height={image.height}
      />
    </div>
  )
}
