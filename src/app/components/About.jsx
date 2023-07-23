import React from "react";
import leavesFallingBG from "../Assets/leaves-falling-bg.svg" 
import myPhoto from '../Assets/my-photo.png';

export default function About(){
    return(
        <div style={{backgroundImage:`url(${leavesFallingBG.src})`}} className="w-full flex items-center justify-evenly">
            <div className="w-2/5 font-mono" style={{fontWeight:"400"}}>
                <div className=" text-7xl text-black">
                    Hello <br/>
                    I am Arpit Tyagi
                </div>
                <div className="text-2xl text-black"><br/>
                    As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </div>
            </div>
            <img src={myPhoto.src}/>
        </div>
    )
}