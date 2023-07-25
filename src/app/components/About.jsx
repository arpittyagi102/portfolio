import React, { useState,useEffect } from "react";
import leavesFallingBG from "../Assets/leaves-falling-bg.svg" 
import myPhoto from '../Assets/my-photo.png';
import leaf from '../Assets/leaf.svg';
import { AnimatePresence, motion } from 'framer-motion';
import chess from '../Assets/chess.svg'
import music from '../Assets/music.svg'
import cricket from '../Assets/cricket.svg'

export default function About(){

    const [showFirstPage, setShowFirstPage] = useState(true);

    const handlePageSwitch = () => {
        setShowFirstPage(item => !item);
    };
    

    return(
        <div style={{backgroundImage:`url(${leavesFallingBG.src})`}} className="w-full flex items-center justify-evenly overflow-hidden realative">
            <div className="absolute right-10 top-10 flex gap-2">
                <img src={chess.src} className=" h-16"  data-bs-toggle="popover" data-bs-content="And here's some amazing content. It's very engaging. Right?"/>
                <img src={music.src} className=" h-16"/>
                <img src={cricket.src} className=" h-16"/>
                <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
            </div>
            <div className="font-mono" style={{fontWeight:"400"}}>
                <div className=" text-8xl text-green-900 text-center cursor-pointer" style={{fontFamily:"Fleur De Leah"}} onClick={handlePageSwitch}>
                    Arpit &nbsp;Tyagi
                </div>
                <div>
                <AnimatePresence mode='wait'>
                    {showFirstPage ? (
                    <motion.div
                        key="first-page"
                        className="text-black text-xl bg-cover h-1/2 w-3/5 relative overflow-hidden"
                        style={{ 
                            backgroundImage: `url(${leaf.src})`,
                            width: "35vw",
                            aspectRatio: "103/100",
                            padding: "20% 10% 15% 20%",
                            fontSize:'1.5vw',
                            fontFamily:'Borel',
                        }}
                        initial={{ x:-300,y:-300,scale:0.3 }}
                        animate={{ x:0,y:0,scale:1 }}
                        exit={{ opacity: 0, x:300, y:300 }}
                        transition={{ duration: 0.5,ease:'easeIn' }}
                    >
                            This is my little cute corner of internet 🎉 Embrace the magic of web development with me, I always work in dark mode as light attracts bugs 🐛🪲 My love to understand new things and to create awesome things led me here. Join me on this adventure and let's craft extraordinary digital experiences together! 🚀🌟                    
                        </motion.div>
                    ) : (
                    <motion.div
                        key="second-page"
                        className="text-black text-xl bg-cover h-1/2 w-3/5 relative"
                        style={{
                            backgroundImage: `url(${leaf.src})`,
                            width: "35vw",
                            fontSize:'1.5vw',
                            aspectRatio: "103/100",
                            padding: "20% 10% 15% 20%",
                            fontSize:'1.5vw',
                            fontFamily:'Borel',
                        }}
                        initial={{ x:-300,y:-300,scale:0.3 }}
                        animate={{ x:0,y:0,scale:1 }}
                        exit={{ opacity: 0, x:300, y:300 }}
                        transition={{ duration: 0.5,ease:'easeIn' }}
                    >
                        Currently I am in my final year pursuing <span className="text-blue-500 font-bold font-mono">B.Tech CSE</span> in Web development from <span className="text-orange-500 font-bold font-mono">Lovely Professional University</span>, India
                        <br/><br/>
                        I am orginally from <span className="text-red-500 font-bold font-mono">Moradabaad</span> and did my schooling from there as well.
                        <br></br>
                        <a className="text-blue-500 font-bold font-mono" href=''>My journey till now</a>
                    </motion.div>
                    )}
                </AnimatePresence>
                </div>
            </div>
            <img src={myPhoto.src}/>
        </div>
    )
}