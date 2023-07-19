'use client'

import { welcomeSvgPath,introSvgPath } from '../Assets/welcomeSvgPath';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'

export default function Welcome(){

    const [svgPath, setSvgPath] = useState(true);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSvgPath(pres => !pres);
        },9000)

        return () => clearInterval(interval)
    })

    useEffect(()=>{
        console.log("changed")
    },[svgPath])
    
  return (
      <div className='bg-red'>
      <svg xmlns="http://www.w3.org/2000/svg"  width="883" height="102" >
        <motion.path
          d={svgPath ? welcomeSvgPath : introSvgPath}
          fill="transparent"
          strokeWidth="1"
          stroke="rgba(255, 255, 255, 0.69)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2,
          }}
        /> 
      </svg>
      </div>
  );
}