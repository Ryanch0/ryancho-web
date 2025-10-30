import { EXTERNAL_URL } from '@/constants/path'
import MainLink from '@/shared/components/MainLink'

const Footer = () => {
  return (
    <footer
      className={'mt-auto mb-8 flex items-center justify-between text-sm'}
    >
      <div>
        Copyright ©
        <MainLink
          title={<p className={'font-family-serif !text-base'}>Ryan Cho</p>}
        />
      </div>

      <MainLink
        className={'italic'}
        title={<p className={'font-family-serif !text-base'}>Source Code</p>}
        href={EXTERNAL_URL.SOURCE_CODE}
        rel={'noopener noreferrer'}
        target={'_blank'}
      />
    </footer>
  )
}

export default Footer
