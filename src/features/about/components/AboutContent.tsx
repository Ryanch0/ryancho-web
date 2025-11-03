import { ReactNode } from 'react'

type Props = {
  key: string
  title: string
  children: ReactNode
}
const AboutContent = ({ key, title, children }: Props) => {
  return (
    <section
      key={key}
      className="flex flex-col border-t py-8 transition-transform last:border-b md:flex-row"
    >
      <div className="my-6 md:my-6 md:w-[20%]">
        <h3 className="text-xl">
          <span>{title}</span>
        </h3>
      </div>
      <ul className="md:my-6 md:w-[85%]">{children}</ul>
    </section>
  )
}

export default AboutContent
