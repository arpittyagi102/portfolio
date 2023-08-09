import cloudsBg from '../Assets/sky-clouds-bg.svg';
import helicopter from '../Assets/helicopter.svg';
import desktop from '../Assets/desktop-cropped.svg'; 
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects(){
    return(
        <div className={`w-full flex justify-evenly items-center `} style={{backgroundImage:`url(${cloudsBg.src})`}}>
            <motion.div
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{
                    ease:'linear', duration:5
                }}  
                style={{
                    height:'500px'
                }}
            >
                <div className='w-full flex justify-between'>
                    <Image src={helicopter} alt='Helicopter' className=' '/>
                    <Image src={helicopter} alt='Helicopter' className=' '/>
                </div>
                <div className='relative'>
                    <Image src={desktop} alt='desktop' className='w-full relative'/>
                    <iframe src='https://humaridukan.netlify.app' className='absolute' style={{top:'10%',left:'7%',width:'86%',height:'80%'}}/>
                </div>
            </motion.div>
        </div>
    )
}