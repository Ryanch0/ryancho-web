import { EXTERNAL_URL } from '@/constants/path'
import AboutContent from '@/features/about/components/AboutContent'
import Education from '@/features/about/components/Education'
import Projects from '@/features/about/components/Projects'
import Footer from '@/shared/components/Footer'
import MainLink from '@/shared/components/MainLink'

const Page = () => {
  return (
    <div className={'flex flex-col gap-30 pt-18'}>
      <div>
        <h2 className={'title-style'}>About</h2>
        <div className={'second-font-style py-1'}>
          <p>Who I am and what I do</p>
          <span>by</span> <MainLink />
        </div>
        <main className={'layout-content'}>
          <p className={'italic'}>
            Relocating to Vancouver, Canada on March 18, 2026, to{' '}
            <strong className={'accent-font-style'}>pursue</strong> new career
            opportunities as a{' '}
            <strong className={'accent-font-style'}>Frontend Developer</strong>.
          </p>
          <div className={'pt-4 pb-8'}>
            <p>
              Feel free to contact me at
              <span>
                <MainLink
                  title={'ryan@ryanch0.dev ↗'}
                  href={`mailto:${EXTERNAL_URL.EMAIL}`}
                  className={'!text-base'}
                />
              </span>
              or download my{' '}
              <MainLink
                title={'resume ↗'}
                href={`#`}
                className={'!text-base'}
              />
              .
            </p>
          </div>
          <div className={'pt-4'}>
            <Projects />
            <AboutContent key={'skills'} title={'Skills'}>
              Skills
            </AboutContent>

            <Education />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Page
