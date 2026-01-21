import { ICON_LIST } from '@/constants/iconList'
import Footer from '@/shared/components/Footer'
import LinkIcon from '@/shared/components/LinkIcon'
import NeonCursor from '@/shared/components/NeonCursor/NeonCursor'
import { getTranslations } from 'next-intl/server'

const Page = async () => {
  const t = await getTranslations('MainPage')

  return (
    <div className={'flex h-[calc(100dvh-54px)] flex-col gap-4 pt-6 sm:pt-18'}>
      <NeonCursor />
      <div>
        <h2 className={'title-style home-name pb-6'}>{t('title')}</h2>
        <h4
          className={
            'home-description text-second-light dark:text-second-dark text-lg'
          }
        >
          {t.rich('description1', {
            strong: (chunk) => (
              <strong className="accent-font-style">{chunk}</strong>
            )
          })}
        </h4>

        <h4 className="home-sub-description text-second-light dark:text-second-dark pt-6 text-lg">
          {t.rich('description2', {
            strong: (chunk) => (
              <strong className="accent-font-style">{chunk}</strong>
            )
          })}
        </h4>

        <ul className={'home-links flex pt-2'}>
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
