import { RefObject } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Props = {
  ref: RefObject<HTMLInputElement | null>
  label: string
  id: string
  type?: string
  name: string
  autoComplete?: string
  placeholder?: string
  error?: string
}

const FormField = ({
  ref,
  label,
  id,
  name,
  error,
  type = 'text',
  placeholder,
  autoComplete
}: Props) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
        className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] autofill:[-webkit-text-fill-color:rgb(89,89,89)] focus-visible:ring-0 focus-visible:ring-offset-0 dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(18,18,18)] dark:autofill:[-webkit-text-fill-color:rgb(199,199,199)]"
        aria-invalid={!!error}
      />
      <p
        className={`${error ? 'mb-3 opacity-100' : 'h-2 opacity-0'} text-destructive text-sm transition-all`}
      >
        {error || ''}
      </p>
    </div>
  )
}

export default FormField
