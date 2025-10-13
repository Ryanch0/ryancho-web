import { PropsWithChildren } from 'react'

const Hero = ({ children }: PropsWithChildren) => {
  return <div className="min-h-80 h-auto bg-amber-950">{children}</div>
}

export default Hero
