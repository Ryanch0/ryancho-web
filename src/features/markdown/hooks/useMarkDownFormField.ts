import React, { useState } from 'react'

import { uploadImageToStorage } from '@/external/repository/posts-client'

type Props = {
  defaultValue?: string
}
const useMarkDownFormField = ({ defaultValue }: Props) => {
  const [value, setValue] = useState<string | undefined>(defaultValue)

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer?.files[0]

    if (!file) return

    const imageUrl = await uploadImageToStorage(file)

    const textarea = document.querySelector('textarea')
    const pos = textarea?.selectionStart
    const newValue =
      value?.slice(0, pos) + `![](${imageUrl})` + value?.slice(pos)

    setValue(newValue)
  }

  return { value, setValue, handleDrop }
}

export default useMarkDownFormField
