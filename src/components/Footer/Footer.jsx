import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center px-10 py-2  bg-cyan-500 text-white">
                <div className="items-center grid-flow-col">
                    <p>
                        Copyright © 2023 -{" "}
                        <span className=" text-white italic font-bold">
                            Md. Maruf Islam{" "}
                        </span>{" "}
                        All right reserved
                    </p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to={"https://github.com/marufislamnadim"}>
                        <FaGithub className=" text-lg cursor-pointer"></FaGithub>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/md-maruf-islam/"}>
                        <FaLinkedinIn className=" text-lg cursor-pointer hover:text-blue-600 rounded-sm"></FaLinkedinIn>
                    </Link>
                    <Link to={"https://www.facebook.com/marufnadim"}>
                        <FaFacebook className=" text-lg cursor-pointer hover:bg-blue-600 rounded-full"></FaFacebook>
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
