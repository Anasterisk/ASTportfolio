import Landing from "./Landing"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import React, {useRef} from 'react'
export default function main(){

    return(
        <div>
            <div className="h-screen flex flex-col container w-screen  -my-10 py-10 snap-y snap-proximity">
                <div class=' snap-center h-screen'>
                    <Landing />
                </div>
                <div class=' snap-center py-10 h-screen'>
                    <AboutMe/>
                </div>
                <div class=' snap-center py-10 h-screen'>
                    <Projects/>
                </div>

            </div>
            
        </div>
    )
}