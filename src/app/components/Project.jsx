import React,{useState, useEffect} from "react";
import helicopter from '../Assets/helicopter.svg';
import desktop from '../Assets/desktop-cropped.svg';
import { motion } from 'framer-motion';
import Image from 'next/image'; 

export default function Project({ projectData }){

    const [pn, setpn] = useState(0);
    const [stargazers, setStargazers] = useState(0);
    const [forks, setForks] = useState(0);

    useEffect(() => {
        fetch(`https://api.github.com/repos/arpittyagi102/${projectData[pn].urlName}`)
            .then(response => response.json())
            .then(data => {setStargazers(data.stargazers_count); setForks(data.forks_count)})
            .catch(error => console.error("Error:", error));
    },[pn]);

    const [showLowerStats, setShowLowerStats] = useState(false);
    
    useEffect(()=>{
        setShowLowerStats(false);
        setTimeout(() => {
            setShowLowerStats(true);
        }, 10000);
    },[pn])


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


    function changeProject(){
        if(pn+1 != projectData.length)
            setpn((item) => item+1)
        console.log(projectData.length,' and ',pn)
    }
    
    return (
    <>  <motion.div  variants={container} initial="hidden" animate="visible" exit={{opacity:0}} key={projectData[pn].title} className='w-2/5'>
            <h1 className='text-black text-5xl' style={{ fontFamily: 'borel',maxWidth:'100%'}} onClick={changeProject}>{projectData[pn].title}</h1>
            <p className='text-black font-bold w-full '>
                {projectData[pn].summary.split('').map((item,key) => {
                    return(
                        <motion.span key={key} variants={child} className="text-xl font-mono font-bold">{item}</motion.span>
                    )}
                )}              
            </p>
                <motion.div className={`flex ${!showLowerStats && 'hidden'}`}>
                    <h1 className="m-5 p-3 px-6 rounded-full bg-slate-900 flex text-lg font-bold">
                        {stargazers} 
                        <img height="20px" src="https://img.icons8.com/fluency/24/star.png" className="ms-2" alt="star"/></h1>
                    <h1 className="m-5 p-3 px-6 rounded-full bg-slate-900 flex text-lg font-bold">
                        {forks}
                        <img src="https://img.icons8.com/ffffff/ios-glyphs/30/code-fork.png" className="ms-2" alt="code-fork"/></h1>
                    <a className="m-5 p-3 px-6 rounded-full bg-slate-900 flex text-lg font-bold" href={`https://github.com/arpittyagi102/${projectData[pn].urlName}`}>
                        Github
                        <img src="https://img.icons8.com/ffffff/windows/30/external-link.png" className="ms-2" alt="externals link"/></a>
                </motion.div>
            
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
