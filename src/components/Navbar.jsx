import About from "./About";
import Container from "./Container/Container";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./contact";
import{Link} from 'react-scroll'

const Navbar = () => {
    const navItem =<>
             <li className="text-[16px] font-semibold px-2 cursor-pointer">Home</li>
             <Link to="about" spy={true} smooth={true} offset={150} duration={1000}><li className="text-[16px] font-semibold px-2 cursor-pointer">About</li></Link>
             <Link to="skills" spy={true} smooth={true} offset={150} duration={1000}><li className="text-[16px] font-semibold px-2 cursor-pointer">Skills</li></Link>
             <Link to="projects" spy={true} smooth={true} offset={-50} duration={1000}><li className="text-[16px] font-semibold px-2 cursor-pointer">Projects</li></Link>
             <Link to="contact" spy={true} smooth={true} offset={0} duration={1000}><li className="text-[16px] font-semibold px-2 cursor-pointer">Contact</li></Link>
             
             
    </>
    return (
           <div>
            <div className="navbar"> 
                    <div className=" container md:container mx-auto ">
                    <div className="navbar-start w-[1000px]">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItem}
                            </ul>
                        </div>
                        <a href="" className="normal-case text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">Firoz Ahmmed</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                           {navItem}
                        </ul>
                    </div>
                    <div className="navbar-end flex">
                        <a className="btn btn-sm normal-case bg-gradient-to-r from-red-500 to-green-500 text-white hover:scale-125 hover:bg-red-500">Hire Me</a>
                    </div>     
                    </div>
            </div>
            
            <Container>
                   <Header></Header>
            </Container>

            <Container>
                <h1 id="about" className="text-center text-5xl md:pt-64 uppercase font-bold">About</h1>
                <About></About>
            </Container>

            <Container>
            <h1 id="skills" className="text-center text-5xl pt-40 uppercase font-bold md:mb-10">My Skills</h1>
                <Skills></Skills>
            </Container>

            <Container>
            <h1 id="projects" className="text-center text-5xl uppercase font-bold md:mb-10 mb-2">My Projects</h1>
              <Projects></Projects>
             </Container>

             <Container>
             <h1 id="contact" className="text-center text-5xl uppercase font-bold mt-10 md:mt-52 md:mb-5 mb-2">Contact</h1>
             <Contact></Contact>
             </Container>

             <Container>
                <Footer></Footer>
             </Container>
            </div>
    );
};

export default Navbar;