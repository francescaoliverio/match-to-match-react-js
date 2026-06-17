// src/components/SearchBar.jsx

import { useState } from 'react'
import { cn } from '../lib/utils'

const BASE_STYLES = 'flex items-center justify-center px-5 py-2.5 rounded-full w-full shadow-md shadow-dark-overlay disabled:cursor-default'

const VARIANT_STYLES = {
  transparent: 'text-ink bg-transparent-white',
  white: 'text-ink bg-white',
}

export default function SearchBar({ placeholder, variant = 'transparent', className, id, children, ref, ...props }) {
  const [input, setInput] = useState('')

  function handleChangeInput(i) {
    setInput(i.target.value)
  }

  return (
    <div className={cn(BASE_STYLES, VARIANT_STYLES[variant], className)} {...props}>
      <input id={id} type='text' value={input} onChange={handleChangeInput} ref={ref} placeholder={placeholder} className='outline-none w-full' />
      {children}
    </div>
  )
}
