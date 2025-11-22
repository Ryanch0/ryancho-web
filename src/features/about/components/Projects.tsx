import AboutContent from '@/features/about/components/AboutContent'
import getProjectDescriptionList from '@/features/about/utils/getProjectDescriptionList'
import TagItem from '@/features/tags/components/TagItem'
import { getTranslations } from 'next-intl/server'

const Projects = async () => {
  const t = await getTranslations('AboutPage.aboutContent.projects')

  return (
    <AboutContent key={'projects'} title={'Projects & Experience'}>
      <div className={'pb-2'}>
        <h2 className={'accent-font-style text-lg font-medium'}>
          {t('company')}
        </h2>
        <p className={'text-second-light/70 dark:text-underline-dark text-sm'}>
          {t.rich('role', {
            span: (chunk) => <span className={'text-xs'}>{chunk}</span>
          })}
        </p>
      </div>
      <article className={'text-sm font-light'}>
        <div className={'my-2'}>
          <p className={'accent-font-style font-medium'}>
            {t('project1.title')}
          </p>
          <span className={'pt-1 text-xs'}>{t('project1.period')}</span>
          <div className="my-1 flex flex-wrap gap-1 text-xs">
            {[
              'React',
              'TypeScript',
              'Sass',
              'Vite',
              'React-Query',
              'Storybook'
            ].map((tag) => (
              <TagItem tag={tag} key={tag} />
            ))}
          </div>
          <ul className={'mt-1 flex max-w-[85%] flex-col gap-1 space-y-1'}>
            {getProjectDescriptionList(9, 'project1.descriptions', t)}
          </ul>
        </div>

        <div className={'my-4'}>
          <p className={'accent-font-style font-medium'}>
            {t('project2.title')}
          </p>
          <span className={'pt-1 text-xs'}>{t('project2.period')}</span>
          <div className="my-1 flex flex-wrap gap-1 text-xs">
            {['React', 'TypeScript', 'Vite', 'Ant Design', 'Sass', 'Jotai'].map(
              (tag) => (
                <TagItem tag={tag} key={tag} />
              )
            )}
          </div>
          <ul className={'mt-1 flex max-w-[85%] flex-col gap-1 space-y-1'}>
            {getProjectDescriptionList(2, 'project2.descriptions', t)}
          </ul>
        </div>

        <div className={'my-2'}>
          <p className={'accent-font-style font-medium'}>
            {t('project3.title')}
          </p>
          <span className={'pt-1 text-xs'}>{t('project3.period')}</span>
          <div className="my-1 flex flex-wrap gap-1 text-xs">
            {['React', 'TypeScript', 'Vite', 'Sass', 'Jotai'].map((tag) => (
              <TagItem tag={tag} key={tag} />
            ))}
          </div>
          <ul className={'mt-1 flex max-w-[85%] flex-col gap-1 space-y-1'}>
            {getProjectDescriptionList(2, 'project3.descriptions', t)}
          </ul>
        </div>

        <div className={'my-2'}>
          <div className={'pt-2 pb-4'}>
            <h2 className={'accent-font-style !text-lg font-medium'}>
              {t('personalProject.heading')}
            </h2>
            <p
              className={
                'text-second-light/70 dark:text-underline-dark text-sm font-normal'
              }
            >
              {t('personalProject.sub-heading')}
            </p>
          </div>
          <p className={'accent-font-style font-medium'}>
            {t('personalProject.title')}
          </p>
          <span className={'pt-1 text-xs'}>{t('personalProject.period')}</span>
          <div className="my-1 flex flex-wrap gap-1 text-xs">
            {['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'MDX'].map(
              (tag) => (
                <TagItem tag={tag} key={tag} />
              )
            )}
          </div>
          <ul className={'mt-1 flex max-w-[85%] flex-col gap-1 space-y-1'}>
            {getProjectDescriptionList(8, 'personalProject.descriptions', t)}
          </ul>
        </div>
      </article>
    </AboutContent>
  )
}

export default Projects
