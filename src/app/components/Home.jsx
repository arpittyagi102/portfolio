import React from "react";
import { motion } from "framer-motion";
import shapesBackground from "../Assets/shapes-background.svg";

export default function Home(){
    return(
        <motion.div className="h-screen w-screen bg-gray-900 flex flex-col bg-cover" style={{backgroundImage:`url(${shapesBackground.src})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            {console.log(shapesBackground)}

            <nav className="flex justify-around p-5 text-xl items-center">
                <div className="flex gap-9">
                    <div>Home</div>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                </div>
                <div className=" rounded-full border-2 p-5 font-bold">
                    AT 
                </div>
                <div className="flex gap-5">
                    <img width="32" height="32" src="https://img.icons8.com/color/32/linkedin-circled--v1.png" alt="linkedin-circled--v1"/>
                    <img width="32" height="32" src="https://img.icons8.com/material-outlined/ffffff/32/github.png" alt="github"/>
                    <img width="32" height="32" src="https://img.icons8.com/fluency/32/instagram-new.png" alt="instagram-new" className="rounded-full overflow-hidden"/>
                    <img width="32" height="32" src="https://img.icons8.com/tiny-color/32/FD4A08/reddit.png" alt="reddit"/>
                    <img width="32" height="32" src="https://img.icons8.com/emoji/32/sun-emoji.png" alt="sun-emoji"/>
                </div>
            </nav>

            <main className="flex justify-evenly items-center grow">
                <div className="w-2/5">
                    <div className=" text-7xl">
                        Hello <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" className="inline-block" 
                        style={{transform: "translatey(-10px)"}}width="84"/><br/>
                        I am Arpit Tyagi
                    </div>
                    <div className="text-2xl">
                    <br/>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                    </div>
                    <div className="px-5 py-3 m-3 bg-white rounded-lg w-max text-black text-lg">
                        Resume
                    </div>
                </div>
                <div>

                </div>
            </main>
            <footer>
                <a><div className="p-4 bg-black rounded-full w-max m-5 text-lg">
                    ⭐ me on Github
                </div></a>
            </footer>
            
        </motion.div>    
    )
}