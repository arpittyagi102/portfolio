import cloudsBg from '../Assets/sky-clouds-bg.svg';
import Project from './Project';

export default function Projects(){

    const humaridukan={
        title:'Humari Dukan',
        summary:'Humari Dukaan is a fully functional ecommerce website built using React.js, Redux, React Router, Bootstrap, and Bootstrap Icons. The project aims to provide users with a seamless shopping experience and incorporates various features such as image carousel, scroll animations, search functionality, category-wise shopping, and a robust checkout system.',
        link:'https://humaridukan.netlify.app/'
    }

    return(
        <div className={`w-full flex justify-evenly items-center overflow-x-hidden`} style={{backgroundImage:`url(${cloudsBg.src})`}}>
            <Project project={humaridukan}/>
        </div>
    )
}