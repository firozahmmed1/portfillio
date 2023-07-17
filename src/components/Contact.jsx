
import { Fade } from "react-awesome-reveal";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center">
                    <ul className> <span className="text-2xl font-bold text-cyan-700">Social Links</span>
                        <Fade direction="left"><a href="https://www.facebook.com/firozahmmed05" className="hover:text-green-500"><li className="mt-5 flex items-center"><BsArrowRight></BsArrowRight> <span className="ml-2 text-xl">Facebook</span></li></a></Fade>
                        <Fade direction="left"><a href="https://www.linkedin.com/in/firoz-ahmmed-835417117" className="hover:text-green-500"><li className="mt-5 flex items-center"><BsArrowRight></BsArrowRight> <span className="ml-2 text-xl">LinkedIn</span></li></a></Fade>
                        <Fade direction="left"><a href="https://github.com/firozahmmed1" className="hover:text-green-500"><li className="mt-5 flex items-center"><BsArrowRight></BsArrowRight> <span className="ml-2 text-xl">Github</span></li></a></Fade>
                    </ul>
                </div>
                <section className="dark:bg-gray-900">
                    <div className="px-4 mx-auto max-w-screen-md">
                        <form action="#" className="space-y-8">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline btn-accent py-3 px-5 text-sm font-medium text-center rounded-lg normal-case">Send message</button>
                        </form>
                    </div>
                </section>
            </div>

            <div className="mt-5 md:mb-10">
                <h1 className="text-2xl font-bold text-center text-cyan-700">Get in touch, let's talk.</h1>
                <p className="text-center">Feel free to get in touch with me regarding any inquiries, project collaborations, or opportunities. Email me at <span className="text-green-500">firozahmmed05@gmail.com</span>. I'm always open to discussing your unique needs and how we can work together to achieve your goals.</p>
            </div>
        </div>
    );
};

export default Contact;