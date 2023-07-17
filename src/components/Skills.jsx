
import { Fade } from 'react-awesome-reveal';
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import Tailwind from '../assets/skills/tailwind.png'
import boostrap from '../assets/skills/boostrap.png'
import firebase from '../assets/skills/firebase.png'
import javascript from '../assets/skills/javascript.png'
import react from '../assets/skills/react.png'
import node from '../assets/skills/nodeJs.png'
import express from '../assets/skills/express.png'
import mongodb from '../assets/skills/mongodb.png'




const Skills = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-5 md:mb-40">
           <div className='flex justify-center items-center '>
           <Fade direction='left'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={html} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>HTML5</h1>
                    </div>
                </Fade>
           </div>
           <div className='flex justify-center items-center '>
           <Fade direction='down'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={css} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>CSS</h1>
                    </div>
                </Fade>
           </div>
           <div className='flex justify-center items-center '>
           <Fade direction='down'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={Tailwind} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>Tailwind CSS</h1>
                    </div>
                </Fade>
           </div>
           <div className='flex justify-center items-center '>
           <Fade direction='down'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={boostrap} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>Bootstrap</h1>
                    </div>
                </Fade>
           </div>
           <div className='flex justify-center items-center '>
           <Fade direction='right'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={firebase} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>Firebase</h1>
                    </div>
                </Fade>
           </div>
          

           <div className='flex justify-center items-center '>
           <Fade direction='left'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={javascript} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>JavaScript </h1>
                    </div>
                </Fade>
           </div>
           <div className='flex justify-center items-center '>
           <Fade direction='down'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={react} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>React js</h1>
                    </div>
                </Fade>
           </div>
           <div className='flex justify-center items-center '>
           <Fade direction='down'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={node} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>Node js</h1>
                    </div>
                </Fade>
           </div>
           <div className='flex justify-center items-center '>
           <Fade direction='down'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={express} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>Express js</h1>
                    </div>
                </Fade>
           </div>
           <div className='flex justify-center items-center '>
           <Fade direction='right'>
                    <div className="card w-52 bg-slate-700 shadow-2xl mb-10">
                        <figure className="px-5 pt-5 pb-5">
                            <img src={mongodb} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <h1 className='text-center text-white text-xl mb-2 font-semibold'>MongoDB</h1>
                    </div>
                </Fade>
           </div>
          
           
        </div>
    );
};

export default Skills;