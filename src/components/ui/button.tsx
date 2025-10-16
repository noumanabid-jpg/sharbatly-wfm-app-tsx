import React from 'react'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'outline', size?: 'default'|'icon' }
export const Button: React.FC<Props> = ({variant='default', size='default', className='', ...props}) => {
  const base = 'inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm transition border'
  const v = variant==='outline' ? 'bg-white hover:bg-zinc-50 border-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800 border-transparent'
  const s = size==='icon' ? 'h-8 w-8 p-0' : ''
  return <button className={`${base} ${v} ${s} ${className}`} {...props} />
}
