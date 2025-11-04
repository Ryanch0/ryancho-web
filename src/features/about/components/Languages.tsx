import AboutContent from '@/features/about/components/AboutContent'

const Languages = () => {
  return (
    <AboutContent key={'languages'} title={'Languages'}>
      <div className="space-y-2 py-1">
        {[
          { name: 'Korean', level: 'Native', value: 100 },
          { name: 'English', level: 'Advanced', value: 85 }
        ].map((lang) => (
          <div key={lang.name}>
            <div className="text-accent-light dark:text-accent-dark flex justify-between text-xs font-light">
              <span>{lang.name}</span>
              <span>{lang.level}</span>
            </div>
            <div className="bg-section-light dark:bg-section-dark mt-1 h-1.5 w-full rounded-full">
              <div
                className="bg-second-light dark:bg-second-dark h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${lang.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </AboutContent>
  )
}

export default Languages
