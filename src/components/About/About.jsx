import { GrDownload } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaFacebook} from 'react-icons/fa';

import profile from "../../assets/profile.jpg"
const About = () => {
    return (
        <div id="about" className="bg-base-200 my-16">
            <h1 className="text-5xl font-bold text-cyan-500 text-center mb-5"><span className=" border-b-2">About Me!</span> </h1>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-7">
                    <img
                        src={
                            profile
                        }
                        className="max-w-[330px] lg:max-w-md rounded-full border-2 p-2 bg-gray-300 border-cyan-500 shadow-2xl"
                    />
                    <div className="px-2">
                        
                        <p className="py-6 text-justify">
                            As a dedicated web developer, I possess a strong
                            foundation in the MERN Stack, thanks to the
                            exceptional course on Programming Hero by Jhankar
                            Mahabub.  Proficient in these technologies, I specialize in developing robust web applications, leveraging the power of React.js for dynamic user interfaces, Express.js for server-side logic, and MongoDB for efficient data management.{" "}
                            <br />
                            
                        </p>
                        <div className="">
                            <h2 className="text-cyan-500 font-bold">Skills -  </h2>
                            <p><span className="text-cyan-500 font-bold">Frontend: </span>HTML, CSS, JavaScript-ES6, Recharts, Tailwind, Bootstarp, React, TanStack-Query, Axios</p>
                            <p><span className="text-cyan-500 font-bold">Backend: </span>ExpressJS, Node JS, JsonWebToken, dotenv</p>
                            <p><span className="text-cyan-500 font-bold">Database: </span>MongoDB</p>
                            <p><span className="text-cyan-500 font-bold">tools and packages: </span>git, MS Visual Studio, Framer-Motion, npm</p>
                        </div>
                        <br />
                        <p>Feel free to explore and engage with my web
                            development journey! Together, let's bring
                            innovative digital solutions to life.</p>
                        <br />
                        <div className="flex justify-start items-center gap-x-4">
                            <p><span  className="text-cyan-500 font-bold">Follow On - </span> </p>
                            <Link to={"https://github.com/marufislamnadim"}><FaGithub className=" text-lg cursor-pointer"></FaGithub></Link>
                            <Link to={"https://www.linkedin.com/in/md-maruf-islam/"}><FaLinkedinIn className=" text-lg text-cyan-700 cursor-pointer"></FaLinkedinIn></Link>
                            <Link to={"https://www.facebook.com/marufnadim"}><FaFacebook className=" text-lg text-blue-600 cursor-pointer"></FaFacebook></Link>
                            
                        </div>
                        <br />
                        <div className="flex justify-start items-center gap-4">
                            <Link
                                to={"#contact"}
                                className="btn btn-info bg-cyan-500 hover:bg-cyan-500 hover:shadow-xl hover:transition-all text-white capitalize"
                            >
                                Hire Me
                            </Link>
                            <a
                                href="/resume.pdf"
                                className="btn btn-info bg-cyan-500 hover:bg-cyan-500 hover:shadow-xl hover:transition-all text-white capitalize"
                                download="resume.pdf"
                            >
                                <GrDownload className="text-white" /> Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;



// https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-MERN-Stack-Developers-from-us.png