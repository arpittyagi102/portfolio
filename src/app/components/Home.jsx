import React from "react";
import { motion, transform } from "framer-motion";
import shapesBackground from "../Assets/shapes-background.svg";
import shapesBackground2 from "../Assets/shapes-background2.svg";
import Character from "../Assets/3dCharacter.png";
import scrollDown from '../Assets/scrollDown.png';

export default function Home(){

    const ArpitTyagi = "Arpit Tyagi".split("")
    return(
        <motion.div className="h-screen w-screen bg-gray-900 flex flex-col bg-cover bg-opacity-0" style={{backgroundImage:`url(${shapesBackground2.src})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundOpacity:"0.5",backgroundOpacity:"0.6"}}>

            <nav className="flex justify-around p-5 text-xl items-center">
                <div className="flex gap-9">
                   {['Home','About','Project','Contact'].map((item) => {
                        return <motion.div
                            whileHover={{rotate:'45deg'}}
                            transition={{ type: "spring", stiffness: 1000 }}
                        >
                            {item}
                        </motion.div>
                   })}
                </div>
                <motion.div className=" rounded-full border-2 p-5 font-bold"
                    drag
                    whileHover={{rotate:'-1800deg'}}
                    transition={{duration:10,ease:'linear'}}
                >
                    AT 
                </motion.div>
                <div className="flex gap-5">
                    <motion.img width="32" height="32" src="https://img.icons8.com/color/32/linkedin-circled--v1.png" alt="linkedin-circled--v1" whileHover={{scale:1.5}} whileTap={{scale:0.6}}/>
                    <motion.img width="32" height="32" src="https://img.icons8.com/material-outlined/ffffff/32/github.png" alt="github" whileHover={{scale:1.5}} whileTap={{scale:0.6}}/>
                    <motion.img width="32" height="32" src="https://img.icons8.com/fluency/32/instagram-new.png" alt="instagram-new" className="rounded-full overflow-hidden" whileHover={{scale:1.5}} whileTap={{scale:0.6}}/>
                    <motion.img width="32" height="32" src="https://img.icons8.com/tiny-color/32/FD4A08/reddit.png" alt="reddit" whileHover={{scale:1.5}} whileTap={{scale:0.6}}/>
                    <motion.img width="32" height="32" src="https://img.icons8.com/emoji/32/sun-emoji.png" alt="sun-emoji" whileHover={{scale:1.5}} whileTap={{scale:0.6}}/>
                </div>
            </nav>

            <main className="flex justify-evenly items-center grow w-full">
                <div className="w-2/5" style={{width:"700px"}}>
                    <div className=" text-7xl">
                        Hello <br/>
                        I am {ArpitTyagi.map((a) => {
                            return <span className="hover:text-blue-500 hover:font-bold">{a}</span>
                        })}
                    </div>
                    <div className="text-2xl">
                    <br/>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                    </div>
                    <div className="px-5 py-3 m-5 bg-white rounded-lg w-max text-black text-lg font-bold">
                        Resume
                    </div>
                </div>
                <div className="inline-block">
                    <img src={Character.src} className="w-2/5 inline-block" style={{width:"450px"}} />
                </div>
            </main>
            <footer className="flex">
                <a className="inline-block"><div className="p-4 bg-black rounded-full w-max m-5 text-lg">
                    ⭐ me on Github
                </div></a>
                <motion.img className="inline-block self-center mx-auto" width="48" height="48" src={scrollDown.src} alt="scroll down"
                    animate={{y:50}}
                    transition={{repeat:Infinity,repeatType:'reverse',duration:1}}
                    style={{translate:"-100px"}}
                />            
            </footer>
            
        </motion.div>    
    )
}