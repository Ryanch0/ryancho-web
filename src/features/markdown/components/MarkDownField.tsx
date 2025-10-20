'use client'

import React, { Dispatch, SetStateAction } from 'react'

import MDEditor from '@uiw/react-md-editor'

type Props = {
  value?: string
  setValue: Dispatch<SetStateAction<string | undefined>>
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => Promise<void>
}
const MarkDownField = ({ value, setValue, handleDrop }: Props) => {
  return (
    <div>
      <MDEditor
        value={value}
        onChange={setValue}
        preview={'live'}
        onDrop={handleDrop}
      />
    </div>
  )
}

export default MarkDownField
