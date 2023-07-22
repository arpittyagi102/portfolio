'use client'

import { welcomeSvgPath,introSvgPath } from '../Assets/welcomeSvgPath';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Welcome(){

    const [svgPath, setSvgPath] = useState(true);
    const [remove, setRemove] = useState(false);
    
    useEffect(()=>{
        setTimeout(() => {
          setSvgPath(pres => !pres);
        }, 4000);

        setTimeout(() => {
          setRemove(true);
        }, 8000);
    },[])
    
    return (
      (
      !remove
      ? <div>
            {svgPath ? (
            <svg xmlns='http://www.w3.org/2000/svg' width='883' height='102'>
              <motion.path
                d={welcomeSvgPath}
                fill='transparent'
                strokeWidth='1'
                stroke='rgba(255, 255, 255, 0.69)'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 7,
                  ease: 'easeInOut',
                }}
              />
              </svg>
            ) : (
              <motion.svg xmlns='http://www.w3.org/2000/svg' width='660' height='102'>
                <motion.path
                  d={introSvgPath}
                  fill='transparent'
                  strokeWidth='1'
                  stroke='rgba(255, 255, 255, 0.69)'
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 7,
                    ease: 'easeInOut',
                  }}
                />
              </motion.svg>
            )}
            </div>
      : null
      )
  );
}