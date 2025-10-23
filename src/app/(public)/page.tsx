import { ICON_LIST } from '@/constants/iconList'
import LinkIcon from '@/shared/components/LinkIcon'

const Page = () => {
  return (
    <div className={'pt-18'}>
      <h2 className={'title-style pb-8'}>Ryan Cho</h2>
      <p className={'text-2xl font-light'}>
        Building worlds from semicolons and dreams, where structure embraces
        spontaneity. Driven by exploration, shaping solutions that blur the line
        between thought and action.
      </p>

      <p className="pt-6 text-xl font-light">
        Currently work at{' '}
        <strong className={'font-semibold'}>Naver Financial</strong> as a
        frontend developer, crafting seamless user experiences.
      </p>

      <ul className={'flex pt-3'}>
        {ICON_LIST.map(({ href, icon, id }) => (
          <li key={id}>
            <LinkIcon href={href} icon={icon} />
          </li>
        ))}
      </ul>

      <footer className={'mt-40 flex justify-between'}>
        <p>SECTION FOR FOOTER?</p>
      </footer>
    </div>
  )
}

export default Page
