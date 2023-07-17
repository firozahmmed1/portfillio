/* eslint-disable no-unused-vars */
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import dev from '../assets/dev/developer.json'
import Lottie from 'lottie-react'
import { Fade } from 'react-awesome-reveal'
import resume from '../assets/resume/firozahmmed_resume.pdf'

const Header = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:h-[500px]'>
            <div>
                <div className='md:mt-40 '>
                    <h1 className='font-bold text-5xl uppercase text-slate-600'>Junior
                        <span className='pl-1 font-bold text-5xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500'>
                            <Typewriter
                                words={['MERN STACK DEVELOPER!', 'FRONT END DEVELOPER!', 'REACT DEVELOPER!']}
                                loop=''
                                typeSpeed={150}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            >
                            </Typewriter>
                        </span>
                    </h1>
                </div>

                <div>
                    <Fade direction='left'>
                        <div>
                            <h1 className="pt-4 font-semibold text-2xl w-full">Hi, I'm <span className='text-green-500'>Firoz Ahmmed</span> a professional mern stack developer</h1>
                        </div>
                    </Fade>
                    <Fade direction='down'><a href={resume} download><p className="btn btn-sm normal-case bg-gradient-to-r from-red-500 to-green-500 text-white hover:scale-125 hover:bg-red-500 mt-4">Resume</p></a></Fade>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Lottie animationData={dev} loop={true}></Lottie>
            </div>
        </div>

    );
};

export default Header;