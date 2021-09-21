import React from 'react'
import "./home.scss"
import {ArrowDownward} from '@material-ui/icons';
import { init } from 'ityped'
import { useEffect,useRef } from 'react';
export default function Home() {
  
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { showCursor: true, strings: ['& App developer', '& Problem Solver', ';)' ] })
  
    }, [])
    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/hamza.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Mohamad Hamza Campo Amor</h1>
                    <h2>creative Web  <span ref={textRef}> </span></h2>
                </div>
                <a href="#portfolio">
                    <ArrowDownward className="icon"/>
                </a>
                
            </div>
        </div>
    )
}
