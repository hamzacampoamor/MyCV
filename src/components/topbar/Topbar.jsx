import React from 'react'
import "./topbar.scss"
import {LaptopMac,Mail,Person} from '@material-ui/icons';
export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar "+(menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    
                    <a href="#home" className="logo"> <LaptopMac fontSize="larg"/> </a>
                    
                    <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>mdhamzaca@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+963968085134</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>  
            </div>
            
        </div>
    )
}
