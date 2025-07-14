"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

type OptimizedImageProps = Omit<ImageProps, "onError"> & {
  fallbackSrc?: string
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.jpg",
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
      loading="lazy"
    />
  )
}

