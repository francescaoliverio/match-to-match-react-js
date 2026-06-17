import { cn } from '../lib/utils'

const BASE_STYLES = 'flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full w-fit shadow-md shadow-dark-overlay font-bold cursor-pointer disabled:cursor-default'

const VARIANT_STYLES = {
  primary: 'text-light bg-primary hover:bg-primary-hover disabled:bg-primary-disabled',
  secondary: 'text-ink bg-secondary hover:bg-secondary-hover disabled:bg-secondary-disabled',
  tertiary: 'text-light bg-tertiary hover:bg-tertiary-hover disabled:bg-tertiary-disabled',
  light: 'text-tertiary bg-light hover:bg-light-hover disabled:bg-light-disabled',
  transparent: 'text-ink hover:text-tertiary disabled:text-grey-light bg-transparent shadow-transparent',
}

export default function Button({ label, variant = 'light', className, handleClick, children, ...props }) {
  return (
    <button onClick={handleClick} className={cn(BASE_STYLES, VARIANT_STYLES[variant], className)} {...props}>
      {children}
      {label}
    </button>
  )
}
