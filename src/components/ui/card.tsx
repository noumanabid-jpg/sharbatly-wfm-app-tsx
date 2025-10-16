import React from 'react'
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className='', ...props}) => (
  <div className={`border rounded-2xl bg-white dark:bg-zinc-900 ${className}`} {...props} />
)
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className='', ...props}) => (
  <div className={className} {...props} />
)
