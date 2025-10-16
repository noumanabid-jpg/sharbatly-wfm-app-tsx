import React from 'react'
export const Slider: React.FC<{value:[number]; min:number; max:number; step?:number; onValueChange:(v:[number])=>void}> = ({value, min, max, step=1, onValueChange}) => {
  return (
    <input type="range" className="w-full"
           min={min} max={max} step={step} value={value[0]}
           onChange={e=>onValueChange([Number(e.target.value)])} />
  )
}
