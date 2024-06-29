import React from 'react'
import Image from "next/image";

const ImageComponent = ({ src, alt, className, width, height }) => {
  return (
    <Image width={width} height={height} alt={alt} src={src} className={className}/>
  )
}

export default ImageComponent