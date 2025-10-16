import React, { createContext } from 'react'

type Opt = { value:string; label:React.ReactNode }
const Ctx = createContext<{value?:string; options:Opt[]}>({options:[]})

export const SelectItem: React.FC<{value:string; children:React.ReactNode}> = () => null
export const SelectTrigger: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children}) => <>{children}</>
export const SelectValue: React.FC = () => null
export const SelectContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children}) => <>{children}</>

function collect(children: React.ReactNode, out: Opt[]) {
  React.Children.forEach(children as any, (ch:any) => {
    if (!ch) return
    if (ch.type === SelectItem) out.push({ value: ch.props.value, label: ch.props.children })
    else if (ch.props && ch.props.children) collect(ch.props.children, out)
  })
}

export const Select: React.FC<{value:string; onValueChange:(v:string)=>void; children:React.ReactNode}> = ({value, onValueChange, children}) => {
  const options: Opt[] = []
  collect(children, options)
  return (
    <Ctx.Provider value={{value, options}}>
      <div className="relative">
        <select className="w-full border rounded-2xl px-3 py-2 bg-white"
                value={value}
                onChange={e=>onValueChange(e.target.value)}>
          {options.map((o,i)=>(<option key={i} value={o.value}>{o.label as any}</option>))}
        </select>
        <div className="hidden">{children}</div>
      </div>
    </Ctx.Provider>
  )
}
