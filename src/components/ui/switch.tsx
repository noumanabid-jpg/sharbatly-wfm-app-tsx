import React from 'react'
export const Switch: React.FC<{checked:boolean; onCheckedChange:(v:boolean)=>void}> = ({checked,onCheckedChange}) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only" checked={checked} onChange={e=>onCheckedChange(e.target.checked)}/>
      <span className={`w-10 h-6 rounded-full transition ${checked?'bg-emerald-500':'bg-zinc-300'}`}>
        <span className={`block h-6 w-6 bg-white rounded-full shadow -mt-0 transition-transform ${checked?'translate-x-4':'translate-x-0'}`}></span>
      </span>
    </label>
  )
}
