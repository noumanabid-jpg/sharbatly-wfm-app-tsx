import React, {createContext, useContext, useState} from 'react'
type TabsCtx = { value:string; setValue:(v:string)=>void }
const Ctx = createContext<TabsCtx|null>(null)
export const Tabs: React.FC<{defaultValue:string; value?:string; onValueChange?:(v:string)=>void; className?:string}> = ({defaultValue, value, onValueChange, className='', children}) => {
  const [inner, setInner] = useState(defaultValue)
  const val = value ?? inner
  const set = (v:string)=> onValueChange ? onValueChange(v) : setInner(v)
  return <Ctx.Provider value={{value:val, setValue:set}}><div className={className}>{children}</div></Ctx.Provider>
}
export const TabsList: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({className='', ...props}) => (
  <div className={`inline-grid gap-2 bg-zinc-100 p-1 rounded-2xl ${className}`} {...props} />
)
export const TabsTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {value:string}> = ({value, className='', ...props}) => {
  const ctx = useContext(Ctx)!
  const active = ctx.value===value
  return <button onClick={()=>ctx.setValue(value)} className={`px-3 py-1 rounded-xl text-sm ${active?'bg-white shadow':'opacity-70 hover:opacity-100'} ${className}`} {...props} />
}
export const TabsContent: React.FC<React.HTMLAttributes<HTMLDivElement> & {value:string}> = ({value, className='', ...props}) => {
  const ctx = useContext(Ctx)!
  if (ctx.value!==value) return null
  return <div className={className} {...props} />
}
