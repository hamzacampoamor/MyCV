import React from 'react'
import "./acountlist.scss"
export default function Acountlist({id,title,active,setSelected}) {
    

    
    return (
        <li className={active ? "acountlist active" : "acountlist"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
