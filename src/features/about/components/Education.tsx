import AboutContent from '@/features/about/components/AboutContent'

const Education = () => {
  return (
    <AboutContent key={'education'} title={'Education'}>
      <div className={'flex flex-col gap-4'}>
        <div>
          <h2 className={'accent-font-style'}>
            Suwon University -{' '}
            <span className={'font-family-sans text-sm'}>
              B.S. in Electronic Materials Engineering
            </span>
          </h2>
          <p
            className={'text-second-light/70 dark:text-underline-dark text-sm'}
          >
            Suwon, South Korea | Feb 2017 – Feb 2025
          </p>
        </div>
        <div>
          <h2 className={'accent-font-style'}>
            ILAC International College -{' '}
            <span className={'font-family-sans text-sm'}>
              Diploma in Service Excellence for Business
            </span>
          </h2>
          <p
            className={'text-second-light/70 dark:text-underline-dark text-sm'}
          >
            Vancouver, Canada | Feb 2023 – Jan 2024
          </p>
        </div>
      </div>
    </AboutContent>
  )
}

export default Education
