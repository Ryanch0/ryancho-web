import MainLink from '@/shared/components/MainLink'

const Page = () => {
  return (
    <div className={'pt-18'}>
      <h2 className={'title-style'}>About</h2>
      <div className={'second-font-style py-1'}>
        <p>Who I am and what I do</p>
        <span>by</span> <MainLink />
      </div>
      <main className={'layout-content'}></main>
    </div>
  )
}

export default Page
