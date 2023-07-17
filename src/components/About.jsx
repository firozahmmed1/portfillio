/* eslint-disable react/jsx-no-target-blank */
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Fade } from "react-awesome-reveal";
import headerpic from '../assets/headerPic/header-pic.png'
import resume from '../assets/resume/firozahmmed_resume.pdf'

const About = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-32">
            <div className="flex justify-end items-center">
                <div className="card w-96">
                    <div className="card-body flex justify-center items-center mt-16">
                        <div className="avatar">
                            <div className="w-40 rounded-full ring ring-gray-700  ring-offset-2">
                                <img src={headerpic} />
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-2 mt-2">
                            <Fade direction="up"><a href="https://github.com" target="_blank"><FaGithub className="text-3xl"></FaGithub></a></Fade>
                            <Fade direction="down"><a href="https://www.linkedin.com/in/firoz-ahmmed-835417117" target="_blank"><BsLinkedin className="text-3xl"></BsLinkedin></a></Fade>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Tabs>
                    <TabList>
                        <Tab><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500 font-semibold text-xl">About me</span></Tab>
                    </TabList>

                    <TabPanel>
                        <Fade direction="right"><h2 className="text-justify text-slate-800 font-semibold">I am a passionate MERN Developer with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and various frameworks. As a junior MERN Developer, I have a strong grasp of Stripe, JWT, Node.js, Express.js, MongoDB, and other robust tools. This allows me to develop seamless and efficient web applications for an enhanced user experience. I stay up-to-date with the latest industry trends by exploring cutting-edge technologies like Shadcn UI, Prisma, Next.js, and TypeScript. By continuously expanding my skill set, I ensure I can deliver innovative solutions.</h2></Fade>
                    </TabPanel>
                </Tabs>
                <Fade direction="down"><a href={resume} className="btn btn-sm normal-case bg-gradient-to-r from-red-500 to-green-500 text-white hover:scale-125 hover:bg-red-500 mt-4" download>Download Resume</a></Fade>
            </div>
        </div>
    );
};

export default About;