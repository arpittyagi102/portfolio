import React from "react";
import helicopter from '../Assets/helicopter.svg';
import desktop from '../Assets/desktop-cropped.svg';
import { motion } from 'framer-motion';
import Image from 'next/image'; 

export default function Project({project}){

    const {title, summary, link} = project;
    return (
    <>  <div className='w-2/5'>
            <h1 className='text-black text-5xl' style={{ fontFamily: 'borel'}}>{title}</h1>
            <p className='text-yellow-800 font-bold w-full'>
                {summary.split(' ').map((item,key) => {
                    return(
                        <motion.span key={key} className="me-1 font-bold">{item}</motion.span>
                    )}
                )}              
            </p>
        </div>
        <motion.div 
            initial={{ x: 500 }} 
            animate={{ x: 0 }} 
            transition={{ duration: 3 }} 
            className='w-1/2' 
        >
            <div className='w-full flex justify-between'>
                <Image src={helicopter} alt='Helicopter' className=' ' />
                <Image src={helicopter} alt='Helicopter' className=' ' />
            </div>
            <div className='relative'>
                <Image src={desktop} alt='desktop' className='w-full relative' />
                <iframe src={link} className='absolute' style={{ top: '10%', left: '7%', width: '86%', height: '80%'}} />
            </div>
        </motion.div>
    </> );
  }
