import { List } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import { Form } from 'reactstrap'
import Acountlist from '../acountlist/Acountlist'
import "./acount.scss"
import {web,bootstrapProjects,problemSolving} from "../../data"

export default function Acount() {
     const[selected,setSelected] = useState("web")
     const[data,setData] = useState([])
    const list = [
        {
            id: "web",
            title: "webApp",
        },
        {
            id: "boot",
            title: "BootStrap",
        },
        {
            id:"problem",
            title:"problem solving",
        }
    ];
    useEffect(() => {
        switch(selected){
            case "web":
            setData(web);
            break;
            case "boot":
            setData(bootstrapProjects);
            break;
            case "problem":
            setData(problemSolving);
            break;
            default:
                setData(web);
            
        }
    }, [selected])
    return (
        <div className="acount"id="acount">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <Acountlist title={item.title} 
                    active={selected === item.id } 
                    setSelected={setSelected}
                    id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
            {data.map((d) =>(
                <div className="item">
                    <a href={d.img}>

                    <img src={d.img} alt="" herf="https://github.com/hamzacampoamor/Campo_Restaurant" />
                    </a>
                    
                </div>
                
                
                ))}
                
            </div>
            

        </div>
    )
}
 