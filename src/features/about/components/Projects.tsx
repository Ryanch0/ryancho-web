import AboutContent from '@/features/about/components/AboutContent'
import TagItem from '@/features/tags/components/TagItem'

const Projects = () => {
  return (
    <AboutContent key={'projects'} title={'Projects & Experience'}>
      <div className={'pb-2'}>
        <h2 className={'accent-font-style text-lg font-medium'}>
          Zium Knowledge Service
        </h2>
        <p className={'text-second-light/70 dark:text-underline-dark text-sm'}>
          Frontend Engineer at Naver Financial{' '}
          <span className={'text-xs'}>(Oct 2024 - Present)</span>
        </p>
      </div>
      <article className={'text-sm font-light'}>
        <div className={'my-2'}>
          <p className={'accent-font-style font-medium'}>
            Naver Financial - Employee Welfare Platform (Frontend Lead){' '}
          </p>
          <span className={'pt-1 text-xs'}>Jan 2025 – Present</span>
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
            <li className="bullet">
              Led frontend architecture design and implementation using React
              Router Data APIs for a scalable Single Page Application.
            </li>
            <li className="bullet">
              Designed a custom error handling framework between BFF and
              frontend, enabling contextual, modal, and page-level recovery
              aligned with UX requirements.
            </li>
            <li className="bullet">
              Improved application performance through lazy loading, request
              deduplication, and optimized React compiler usage.
            </li>
            <li className="bullet">
              Developed complex validation workflows with React Hook Form and
              Zod, including file signature verification for secure uploads.
            </li>
            <li className="bullet">
              Enhanced production observability and security with Sentry
              integration and hidden sourcemaps via Vite build pipelines.
            </li>
            <li className="bullet">
              Automated API type generation with Swagger TypeScript API,
              improving developer productivity and backend integration
              consistency.
            </li>
            <li className="bullet">
              Reduced production bundle size by 30% through dynamic imports,
              excluding mock and development-only modules.
            </li>
            <li className="bullet">
              Introduced Canary dark-release deployment strategy for safer QA
              and progressive rollouts, replacing legacy Blue/Green approach.
            </li>
          </ul>
        </div>

        <div className={'my-2'}>
          <p className={'accent-font-style font-medium'}>
            Naver Financial - Customer Inquiry Portal (Frontend Development, Sub
            Project)
          </p>
          <span className={'pt-1 text-xs'}>Oct 2024 – Jan 2025</span>
          <div className="my-1 flex flex-wrap gap-1 text-xs">
            {['React', 'TypeScript', 'Vite', 'Ant Design', 'Sass', 'Jotai'].map(
              (tag) => (
                <TagItem tag={tag} key={tag} />
              )
            )}
          </div>
          <ul className={'mt-1 flex max-w-[85%] flex-col gap-1 space-y-1'}>
            <li className="bullet">
              Built the customer inquiry page and customized the Ant Design
              DatePicker component to meet business requirements.
            </li>
            <li className="bullet">
              Conducted cross-device testing using Android Studio and Xcode to
              resolve layout, scroll, and event bubbling issues.
            </li>
          </ul>
        </div>

        <div className={'my-2'}>
          <p className={'accent-font-style font-medium'}>
            Naver Financial - Internal Admin Dashboard (Frontend Development,
            Sub Project)
          </p>
          <span className={'pt-1 text-xs'}>Apr 2024 – Jun 2025</span>
          <div className="my-1 flex flex-wrap gap-1 text-xs">
            {['React', 'TypeScript', 'Vite', 'Sass', 'Jotai'].map((tag) => (
              <TagItem tag={tag} key={tag} />
            ))}
          </div>
          <ul className={'mt-1 flex max-w-[85%] flex-col gap-1 space-y-1'}>
            <li className="bullet">
              Contributed to two internal admin dashboards using React and Jotai
              for state management.
            </li>
            <li className="bullet">
              Integrated multiple backend and BFF APIs to ensure seamless
              synchronization and data consistency.
            </li>
          </ul>
        </div>

        <div className={'my-2'}>
          <div className={'pt-2 pb-4'}>
            <h2 className={'accent-font-style !text-lg'}>Personal Project</h2>
            <p
              className={
                'text-second-light/70 dark:text-underline-dark text-sm'
              }
            >
              Full-stack Personal Project
            </p>
          </div>
          <p className={'accent-font-style font-medium'}>
            This Website - ryanch0.dev
          </p>
          <span className={'pt-1 text-xs'}>Oct 2025 – Nov 2025</span>
          <div className="my-1 flex flex-wrap gap-1 text-xs">
            {['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'MDX'].map(
              (tag) => (
                <TagItem tag={tag} key={tag} />
              )
            )}
          </div>
          <ul className={'mt-1 flex max-w-[85%] flex-col gap-1 space-y-1'}>
            <li className="bullet">
              Built a full-stack personal blog using Next.js (^15 App Router)
              and Supabase for authentication, storage, and database management.
            </li>
            <li className="bullet">
              Leveraged Next.js Server Actions to handle user authentication and
              post creation securely without exposing client-side API routes.
            </li>
            <li className="bullet">
              Implemented a custom Markdown editor and renderer (MDX-based) to
              support rich content authoring.
            </li>
            <li className="bullet">
              Designed and developed a minimal design system using Tailwind CSS
              for consistent typography, spacing, and component styles.
            </li>
            <li className="bullet">
              Utilized Next.js Middleware to handle protected routes and enforce
              authentication on server side.
            </li>
          </ul>
        </div>
      </article>
    </AboutContent>
  )
}

export default Projects
