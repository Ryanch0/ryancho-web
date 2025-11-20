import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import MainLink from '@/shared/components/MainLink'

const NotFound = () => {
  return (
    <main className="layout">
      <Header />
      <div className={'flex flex-col gap-30 pt-18'}>
        <div>
          <h2 className={'title-style'}>404</h2>
          <div className={'second-font-style py-1'}>
            <p>Page Not Found</p>
            <span>by</span> <MainLink />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default NotFound
