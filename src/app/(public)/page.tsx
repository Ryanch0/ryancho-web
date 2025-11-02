import { ICON_LIST } from '@/constants/iconList'
import Footer from '@/shared/components/Footer'
import LinkIcon from '@/shared/components/Header/components/LinkIcon'

const Page = () => {
  return (
    <div className={'flex h-[calc(100vh-54px)] flex-col gap-4 pt-18'}>
      <div>
        <h2 className={'title-style pb-6'}>Ryan Cho</h2>
        <h4 className={'text-second-light dark:text-second-dark text-[1.3rem]'}>
          Building with semicolons and vision, I search for{' '}
          <strong className={'text-accent-light dark:text-accent-dark'}>
            alternatives
          </strong>{' '}
          when others see dead ends. Structure and spontaneity converge
          here—where exploration transforms obstacles into{' '}
          <strong className={'text-accent-light dark:text-accent-dark'}>
            elegant solutions
          </strong>
          .
        </h4>

        <h4 className="text-second-light dark:text-second-dark pt-6 text-[1.3rem]">
          Currently work at{' '}
          <strong className={'text-accent-light dark:text-accent-dark'}>
            Naver Financial
          </strong>{' '}
          as a frontend developer, crafting seamless user experiences.
        </h4>

        <ul className={'flex pt-2'}>
          {ICON_LIST.map(({ href, icon, id }) => (
            <li key={id}>
              <LinkIcon href={href} icon={icon} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Page
