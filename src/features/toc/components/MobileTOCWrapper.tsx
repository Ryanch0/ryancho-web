'use client'

import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import { motion } from 'framer-motion'

type Props = {
  title: string
  children: ReactNode
  isVisible?: boolean
}

const MobileTOCWrapper = ({ title, children, isVisible = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)
  const [titleWidth, setTitleWidth] = useState<number | null>(null)

  const getWidth = () => {
    if (isOpen) return 'min(300px, calc(100vw - 2rem))'

    if (titleWidth) return `${titleWidth}px`

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
        top: isVisible ? '3.5rem' : '-12rem'
      }}
      initial={{ top: '-5rem' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <motion.div
        animate={{
          width: getWidth(),
          borderRadius: isOpen ? 16 : 24
        }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`${isOpen ? 'pt-1' : ''} relative overflow-hidden bg-white/75 shadow-lg backdrop-blur-2xl backdrop-saturate-[1.2] select-none dark:bg-zinc-700/70`}
      >
        <button
          className="flex w-full cursor-pointer items-center justify-between gap-3 px-3 py-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            ref={titleRef}
            className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden"
          >
            <h2 className="text-accent-light dark:text-accent-dark truncate text-lg">
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
          className="overflow-hidden"
          style={{
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
        >
          <div className="max-h-[calc(60vh-5rem)] overflow-y-auto px-4 pb-4">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default MobileTOCWrapper
