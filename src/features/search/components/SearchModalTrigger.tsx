'use client'

import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

import SearchModal from '@/features/search/components/SearchModal'

const SearchModalTrigger = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <>
      <button onClick={openModal}>
        <CiSearch
          size={35}
          className={
            'cursor-pointer p-1.5 transition-transform duration-400 ease-out hover:scale-110'
          }
        />
      </button>
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default SearchModalTrigger
