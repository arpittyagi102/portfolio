import React, { useState } from "react";
import leavesFallingBG from "../Assets/leaves-falling-bg.svg" 
import myPhoto from '../Assets/my-photo.png';
import leaf from '../Assets/leaf.svg';
import { AnimatePresence, motion } from 'framer-motion';

export default function About(){

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped((item) => !item);
      };

    return(
        <div style={{backgroundImage:`url(${leavesFallingBG.src})`}} className="w-full flex items-center justify-evenly">
            <div className="font-mono" style={{fontWeight:"400"}}>
                <div className=" text-8xl text-green-700 text-center" style={{fontFamily:"Fleur De Leah"}}>
                    Arpit &nbsp;Tyagi
                </div>
                <div>
                    <AnimatePresence>
                    {
                        isFlipped ? (
                            <motion.div className=" text-black text-xl bg-cover bg-no-repeat bg-center" 
                                style={{backgroundImage :`url(${leaf.src})`,width:'63vw', height: '55vh',padding:'10% 10% 10% 20%',backfaceVisibility:'hidden'}}
                                key="back"
                                initial={{ rotateY: 180 }}
                                animate={{ rotateY: 0 }}
                                exit={{ rotateY: 180 }}
                                transition={{ duration: 0.5 }}   
                                onTapStart={setIsFlipped((item) => !item)}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero illo sint quibusdam? Amet, adipisci beatae voluptate laborum, soluta possimus totam quos reprehenderit, rem voluptatibus maxime repellat fugit voluptatem eum.
                            </motion.div>
                        ) : (
                            <motion.div className=" text-black text-xl bg-cover bg-no-repeat bg-center" 
                                style={{backgroundImage :`url(${leaf.src})`,width:'63vw', height: '55vh',padding:'10% 10% 10% 20%',backfaceVisibility:'hidden'}}
                                key="front"
                                initial={{ rotateY: 180 }}
                                animate={{ rotateY: 0 }}
                                exit={{ rotateY: 180 }}
                                transition={{ duration: 0.5 }}
                            >
                                Hylaaa meri janananaanaaaa
                            </motion.div>
                        )
                    }
                    <div
                        onClick={handleFlip}
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                        }}
                    >
                    </div>
                    </AnimatePresence>
                </div>
            </div>
            <img src={myPhoto.src}/>
        </div>
    )
}