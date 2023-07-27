import react, { useState } from 'react';
import cloudsBg from '../Assets/sky-clouds-bg.svg';
import hotAirBallon from '../Assets/hot-air-balloon.svg';
import { motion } from 'framer-motion';

export default function Skills(){

    const [value, setValue] = useState(true)

    const string = ['C','C++','HTML','CSS','Javascript','Jquery','Bootstrap','React.js','Redux','Next.js','Tailwind CSS','FramerMotion','Node.js','Express','MySQL','MongoDB','Git','Postman']
    return(
        <div className={`w-full flex justify-evenly items-center flex-wrap ${value ? "flex-row-reverse" : ""}`} style={{backgroundImage:`url(${cloudsBg.src})`}}>
            <button onClick={() => setValue((item) => !item)}> CLick me</button>
            {
                string.map((item,key)=>{
                    return <Balloon value={item} key={key}/>
                })
            }
        </div>
    )
}

function Balloon({value}){
    return(
        <motion.div className="w-40 h-40 bg-contain flex justify-center items-center bg-no-repeat m-10" style={{backgroundImage:`url(${hotAirBallon.src})`}} drag layout>
            <div className='font-extrabold text-black p-2 rounded-full' style={{translate:'0 -20px'}}>
                {value}
            </div>
        </motion.div>
    )
}