import { ReactNode } from 'react'

import AboutContent from '@/features/about/components/AboutContent'
import TagItem from '@/features/tags/components/TagItem'

const SkillSectionWrapper = ({
  title,
  children
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <div className={'py-1'}>
      <p className={'accent-font-style pb-1 text-sm font-medium'}>{title}</p>
      <div className="my-1 flex flex-wrap gap-1.5 text-xs font-light">
        {children}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <AboutContent key={'skills'} title={'Skills'}>
      <SkillSectionWrapper title={'Frontend Development'}>
        {[
          'TypeScript',
          'JavaScript (ES6+)',
          'React',
          'Next.js',
          'Vite',
          'React Router',
          'Tailwind CSS',
          'SASS',
          'HTML5',
          'CSS3'
        ].map((tag) => (
          <TagItem tag={tag} key={tag} />
        ))}
      </SkillSectionWrapper>

      <SkillSectionWrapper title={'State & Data Management'}>
        {['React Query', 'Jotai', 'React Hook Form', 'Zod', 'Axios'].map(
          (tag) => (
            <TagItem tag={tag} key={tag} />
          )
        )}
      </SkillSectionWrapper>

      <SkillSectionWrapper title={'UI & Component Design'}>
        {[
          'Storybook',
          'Ant Design',
          'Responsive Design',
          'Accessibility (a11y)'
        ].map((tag) => (
          <TagItem tag={tag} key={tag} />
        ))}
      </SkillSectionWrapper>

      <SkillSectionWrapper title={'Testing & Mocking'}>
        {['MSW (Mock Service Worker)'].map((tag) => (
          <TagItem tag={tag} key={tag} />
        ))}
      </SkillSectionWrapper>

      <SkillSectionWrapper title={'Code Quality & Tooling'}>
        {['Git', 'ESLint', 'Prettier', 'Clean Architecture'].map((tag) => (
          <TagItem tag={tag} key={tag} />
        ))}
      </SkillSectionWrapper>

      <SkillSectionWrapper title={'DevOps & Monitoring (Working Knowledge)'}>
        {[
          'Docker',
          'Kubernetes (internal orchestration, CI/CD)',
          'Grafana'
        ].map((tag) => (
          <TagItem tag={tag} key={tag} />
        ))}
      </SkillSectionWrapper>
    </AboutContent>
  )
}

export default Skills
