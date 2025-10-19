'use client'

import { Dispatch, SetStateAction } from 'react'

import MDEditor from '@uiw/react-md-editor'

type Props = {
  defaultValue?: string
  setValue: Dispatch<SetStateAction<string | undefined>>
}
const MarkDownField = ({ defaultValue, setValue }: Props) => {
  return (
    <div>
      <MDEditor value={defaultValue} onChange={setValue} preview={'live'} />
    </div>
  )
}

export default MarkDownField
