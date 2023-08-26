import react, { useState } from 'react';
import cloudsBg from '../Assets/rain-dark-bg.svg';
import hotAirBallon from '../Assets/drop-water.svg';
import { motion, stagger } from 'framer-motion';
import oceanWaves from '../Assets/ocean-waves-bg.svg';
import Image from 'next/image';

export default function Skills(){

    const [value, setValue] = useState(true)

    const string = ['C','C++','HTML','CSS','Javascript','Jquery','Bootstrap','React.js','Redux','Next.js','Tailwind CSS','FramerMotion','Node.js','Express','MySQL','MongoDB','Git','Postman']
    return(
        <div className={`w-full flex justify-evenly items-center flex-wrap ${value ? "flex-row-reverse" : ""}`} style={{backgroundImage:`url(${cloudsBg.src})`}}>
            {
                string.map((item,key)=>{
                    return <Balloon value={item} key={key} delay={0.3}/>
                })
            }
        <Image src={oceanWaves} className='w-full opacity-40'/>
        </div>
    )
}

function Balloon({value,delay}){
    return(
        <motion.div className="w-40 h-40 bg-contain flex justify-center items-center bg-no-repeat mx-10" 
            style={{backgroundImage:`url(${hotAirBallon.src})`}} drag layout
            animate={["initial"]}
        whileHover={["grow"]}
        variants={{
          grow: {
            scale: 1.1
          },
          rotate: {
            rotate: [null, -5, 5, 0],
            transition: {
              duration: 10
            }
          },
          initial: {
            y: [-10, 10],
            rotate: 0,
            transition: {
              delay:Math.random() * 3,
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }
        }}
        >
            <div className=' font-bold p-2 rounded-full text-black' style={{translate:'-10px 0'}}>
                {value}
            </div>
        </motion.div>
    )
}

function FloatingDiv({ delay }) {
    return (
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 8,
          margin: 10,
          backgroundColor: "#fff",
          cursor: "pointer"
        }}
        animate={["initial"]}
        whileHover={["grow"]}
        variants={{
          grow: {
            scale: 1.1
          },
          rotate: {
            rotate: [null, -5, 5, 0],
            transition: {
              duration: 10
            }
          },
          initial: {
            y: [-20, 20],
            rotate: 0,
            transition: {
              delay,
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }
        }}
      />
    );
  }