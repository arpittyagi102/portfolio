import ocean from "../Assets/ocean-bubbles-bg.svg";
import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'],weight: ['400'] });

export default function Contact(){
    return(
        <div className="h-screen w-full flex justify-center" style={{backgroundImage:`url(${ocean.src})`}}> 
            <div className=" bg-black opacity-30 m-10 h-min py-10 px-40">
                <h1 className={`${oswald.className} text-6xl mb-7 text-center`}>Reach out to me</h1>
                <div className="flex items-start justify-between">
                    <label className="text-2xl">Your Sweet name :</label>
                    <input type="text" className="ml-10 mb-4 text-2xl text-black font-extrabold p-1"/>
                </div>
                <div className="flex items-start justify-between">
                    <label className="text-2xl">Your Generous message :</label>
                    <textarea type="text" className="ml-10 mb-4 text-2xl text-black font-extrabold"/>
                </div>
                <button className="border px-5 py-3">Send</button>
                <div></div>
            </div>
        </div>
    )
}