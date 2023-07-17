import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="md:pb-10">
            <footer className="footer items-center p-4 border-0 border-t-4 border-cyan-950">
                <div className="items-center grid-flow-col">
                    <p className="text-xl font-bold">© 2023 Firoz Ahmmed. All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                   <a className="text-2xl hover:text-[#0072b1]" href="https://www.linkedin.com/in/firoz-ahmmed-835417117"><FaLinkedin></FaLinkedin></a>
                   <a className="text-2xl hover:text-[#0072b1]" href=""><FaGithub></FaGithub></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;