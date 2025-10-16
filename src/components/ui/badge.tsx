import React from 'react'
export const Badge: React.FC<{variant?:'secondary'|'default'; className?:string; children:React.ReactNode}> = ({variant='default', className='', children}) => {
  const v = variant==='secondary' ? 'bg-zinc-100 text-zinc-700' : 'bg-zinc-900 text-white'
  return <span className={`inline-flex items-center ${v} rounded-xl px-2 py-1 text-xs ${className}`}>{children}</span>
}
