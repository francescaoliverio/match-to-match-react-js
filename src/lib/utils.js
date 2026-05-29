// cn() — Class Name utility
//
// Merges conditional CSS classes and resolves Tailwind conflicts.
//
// Combines two libraries:
//  - clsx           → handles conditions, arrays, objects
//  - tailwind-merge → resolves conflicts (e.g. px-4 + px-8 → px-8)
//
// WHEN TO USE:
//   - When a component accepts a `className` prop from outside
//   - In any component with dynamic or conditional classes
//   - When classes change based on props or state
//
// HOW TO USE:
//   import { cn } from '../../lib/utils'
//   <element className={cn(base, variants[variant], className)} .../>
//
// NOTE: Not needed for static classes that never change.
//       A plain string is enough in that case.

// npm install clsx tailwind-merge

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}