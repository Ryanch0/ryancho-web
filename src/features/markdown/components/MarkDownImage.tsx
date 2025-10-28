'use client'

import Image from 'next/image'

type Props = {
  src: string
  alt?: string
  width?: number
  height?: number
}
const MarkDownImage = ({ src, alt = '', width = 800, height = 0 }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        maxWidth: '700px',
        width: '100%',
        height: 'auto',
        maxHeight: '500px',
        objectFit: 'contain'
      }}
    />
  )
}

export default MarkDownImage
