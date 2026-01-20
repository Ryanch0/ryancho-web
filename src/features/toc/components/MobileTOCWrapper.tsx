'use client'

import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import CircularScrollProgress from '@/features/toc/components/CircularScrollProgressBar'
import { motion } from 'framer-motion'

type Props = {
  title: string
  children: ReactNode
  isVisible?: boolean
}

const MobileTOCWrapper = ({ title, children, isVisible = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleWidth, setTitleWidth] = useState<number | null>(null)

  const getWidth = () => {
    if (titleWidth) {
      return `min(${titleWidth + 30}px, min(calc(100vw - 2rem), 450px))`
    }

    return 'auto'
  }

  useLayoutEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth + 60)
    }
  }, [title])

  return (
    <motion.div
      className="fixed left-1/2 z-40 -translate-x-1/2"
      animate={{
        top: isVisible ? 'calc(3.5rem + env(safe-area-inset-top, 0px))' : '0',
        opacity: isVisible ? 1 : 0
      }}
      initial={{ top: '0' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <motion.div
        animate={{
          width: getWidth(),
          borderRadius: isOpen ? 16 : 24
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`${isOpen ? 'pt-1' : ''} relative overflow-hidden bg-white/75 shadow-lg backdrop-blur-2xl backdrop-saturate-[1.2] transition-all select-none dark:bg-zinc-500/20`}
      >
        <button
          className="flex w-full cursor-pointer items-center justify-between gap-3 px-3 py-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex-shrink-0">
              <CircularScrollProgress />
            </div>
            <h2 ref={titleRef} className="accent-font-style truncate text-lg">
              {title}
            </h2>
          </div>
          {isOpen ? (
            <IoIosArrowUp className="h-4 w-4 flex-shrink-0" />
          ) : (
            <IoIosArrowDown className="h-4 w-4 flex-shrink-0" />
          )}
        </button>

        <motion.div
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          initial={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="overflow-y-auto"
          style={{
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
        >
          <div className="max-h-[calc(60dvh-5rem)] overflow-y-auto px-4 pb-4">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default MobileTOCWrapper
