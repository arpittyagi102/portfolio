import React,{useState, useEffect} from "react";
import helicopter from '../Assets/helicopter.svg';
import desktop from '../Assets/desktop-cropped.svg';
import { motion } from 'framer-motion';
import Image from 'next/image'; 

export default function Project({ projectData }){

    useEffect(() => {
        fetch('https://api.github.com/repos/arpittyagi102/LinkUp/stargazers')
            .then(response => response.json())
            .then(data => setStargazers(data.length))
            .catch(error => console.error("Error:", error));
    });

    const [showLowerStats, setShowLowerStats] = useState(false);
    
    useEffect(()=>{
        setTimeout(() => {
            setShowLowerStats(true);
        }, 10000);
    })


    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    };

    const [pn, setpn] = useState(0);
    const [stargazers, setStargazers] = useState(0);

    function changeProject(){
        if(pn+1 != projectData.length)
            setpn((item) => item+1)
        console.log(projectData.length,' and ',pn)
    }
    
    return (
    <>  <motion.div  variants={container} initial="hidden" animate="visible" exit={{opacity:0}} key={projectData[pn].title} className='w-2/5'>
            <h1 className='text-black text-5xl' style={{ fontFamily: 'borel',maxWidth:'100%'}} onClick={changeProject}>{projectData[pn].title}</h1>
            <p className='text-black font-bold w-full'>
                {projectData[pn].summary.split('').map((item,key) => {
                    return(
                        <motion.span key={key} variants={child} className="text-xl font-mono font-bold">{item}</motion.span>
                    )}
                )}              
            </p>
            {showLowerStats &&
                <motion.div className="flex">
                    <h1 className="m-5 p-3 px-6 rounded-full bg-slate-900 flex text-lg font-bold">
                        {stargazers} 
                        <img height="20px" src="https://img.icons8.com/fluency/24/star.png" className="ms-2" alt="star"/></h1>
                    <h1 className="m-5 p-3 px-6 rounded-full bg-slate-900">
                        {stargazers}</h1>
                </motion.div>
            }
            
        </motion.div>
        <motion.div 
            initial={{ x: 500 }} 
            animate={{ x: 0 }} 
            exit={{opacity:0}}
            transition={{ duration: 3 }} 
            className='w-1/2' 
            key={projectData[pn].link}
        >
            <div className='w-full flex justify-between'>
                <Image src={helicopter} alt='Helicopter' className=' ' />
                <Image src={helicopter} alt='Helicopter' className=' ' />
            </div>
            <div className='relative'>
                <Image src={desktop} alt='desktop' className='w-full relative' />
                <iframe src={projectData[pn].link} className='absolute' style={{ top: '10%', left: '7%', width: '86%', height: '80%'}} />
            </div>
        </motion.div>
    </> );
  }
