'use client'

import { ReactNode, useRef } from 'react'

import MobileTOCWrapper from '@/features/toc/components/MobileTOCWrapper'
import TOC from '@/features/toc/components/TOC'
import useMobileTocVisible from '@/features/toc/hooks/useMobileTocVisible'

type Props = {
  title: string
  children: ReactNode
}
const PostDetailWrapper = ({ title, children }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null)

  const isContentVisible = useMobileTocVisible(contentRef)

  return (
    <div>
      <div ref={contentRef} className="prose prose-custom mt-16 max-w-3xl">
        {children}
      </div>
      <aside
        className={
          'fixed top-[30%] right-6 block opacity-0 min-[1400px]:right-[5%] xl:opacity-100 2xl:right-[10%]'
        }
      >
        <TOC />
      </aside>

      <div className={'opacity-100 xl:opacity-0'}>
        <MobileTOCWrapper title={title} isVisible={isContentVisible}>
          <TOC isMobile />
        </MobileTOCWrapper>
      </div>
    </div>
  )
}

export default PostDetailWrapper
