import { PropsWithChildren } from 'react'

const Hero = ({ children }: PropsWithChildren) => {
  return <div className="bg-white">{children}</div>
}

export default Hero
