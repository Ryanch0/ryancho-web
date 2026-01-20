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
      <div
        ref={contentRef}
        className="prose prose-custom mt-10 max-w-3xl md:mt-14"
      >
        {children}
      </div>
      <aside
        className={
          'fixed top-[30%] right-[0.5px] hidden w-64 min-[1400px]:right-[2%] min-[1400px]:w-70 xl:block 2xl:w-80'
        }
      >
        <TOC />
      </aside>

      <div className={'visible opacity-100 xl:invisible xl:opacity-0'}>
        <MobileTOCWrapper title={title} isVisible={isContentVisible}>
          <TOC isMobile />
        </MobileTOCWrapper>
      </div>
    </div>
  )
}

export default PostDetailWrapper
