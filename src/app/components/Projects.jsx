import cloudsBg from '../Assets/sky-clouds-bg.svg';
import Project from './Project';
import React,{useState} from 'react';

export default function Projects(){

    const projectsData=[
        {
            title:'Humari Dukan',
            summary:'Humari Dukaan is a fully functional ecommerce website built using React.js, Redux, React Router, Bootstrap, and Bootstrap Icons. The project aims to provide users with a seamless shopping experience and incorporates various features such as image carousel, scroll animations, search functionality, category-wise shopping, and a robust checkout system.',
            link:'https://humaridukan.netlify.app/'
        },
        {
            title:'LinkUp',
            summary:' This is a MERN stack project that provides an attractive and seamless chatting experience. With its user-friendly interface and advanced features, this application allows users to engage in real-time conversations with others, keeping them connected and up to date.',
            link:'https://getlinkup.vercel.app/'
        },
    ]

    

    return(
        <div className={`w-full flex justify-evenly items-center overflow-x-hidden`} style={{backgroundImage:`url(${cloudsBg.src})`}}>
            <Project projectData={projectsData} />
        </div>
    )
}