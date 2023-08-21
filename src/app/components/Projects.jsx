import cloudsBg from '../Assets/sky-clouds-bg.svg';
import Project from './Project';
import React,{useState} from 'react';

export default function Projects(){

    const projectsData=[
        {
            urlName:'Humari-dukan',
            title:'Humari Dukan',
            summary:'Humari Dukaan is a fully functional ecommerce website built using React.js, Redux, React Router, Bootstrap, and Bootstrap Icons. The project aims to provide users with a seamless shopping experience and incorporates various features such as image carousel, scroll animations, search functionality, category-wise shopping, and a robust checkout system.',
            link:'https://humaridukan.netlify.app/'
        },
        {
            urlName:'LinkUp',
            title:'LinkUp',
            summary:' This is a MERN stack project that provides an attractive and seamless chatting experience. With its user-friendly interface and advanced features, this application allows users to engage in real-time conversations with others, keeping them connected and up to date.',
            link:'https://getlinkup.vercel.app/'
        },
        {
            urlName:'HideandSeek',
            title:'Hide and Seek',
            summary:'Welcome to Hide and Seek, a web game built using vanilla JavaScript. In this game you are challenged to find hidden gifts and avoid the dangerous bomb. Test your luck and play this simple and fun game, You can play a hide and seek game in it with 3 levels and 3 themes',
            link:'https://hideandseekk.vercel.app'
        },
        {
            urlName:'speedykeys',
            title:'Speedy keys',
            summary:'Welcome to Speedy Keys, a web-based typing speed test application that allows you to practice and improve your typing skills. Test your typing speed, accuracy, and efficiency with different difficulty levels and time durations',
            link:'https://speedykeys.vercel.app'
        }
    ]

    

    return(
        <div className={`w-full flex justify-evenly items-center overflow-x-hidden`} style={{backgroundImage:`url(${cloudsBg.src})`}}>
            <Project projectData={projectsData} />
        </div>
    )
}