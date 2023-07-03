import { Link } from "react-router-dom";
import edu from "../../assets/edu_full.png";
import esp from "../../assets/esp_full.png";
import marvel from "../../assets/marvel_full.png";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <div id="portfolio" className="my-20">
            <h1 className="text-5xl font-bold text-cyan-500 text-center my-5">
                <span className=" border-b-2">My Portfolio!</span>{" "}
            </h1>
            <div className="flex justify-center items-center flex-wrap gap-12 my-10 ">
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5 overflow-hidden">
                        <div className="image-container">
                            <img
                                src={edu}
                                alt="EduCamp"
                                className="rounded-xl hover-scroll"
                            />
                        </div>
                    </figure>
                    <div className="card-body items-center text-left">
                        <h2 className="font-semibold text-left">
                            <span className="font-semibold text-cyan-500">
                                Project Title:{" "}
                            </span>{" "}
                            EduCamp Summer School
                        </h2>
                        <p className="text-left">
                            <span className="font-semibold text-cyan-500">
                                Application Type:{" "}
                            </span>
                            Educational Institute Management System
                        </p>
                        <p className="text-left">
                            <span className="font-semibold text-cyan-500">
                                Technology:{" "}
                            </span>
                            ReactJS, ExpressJS, MongoDB, JWT, dotenv, axios,
                            firebase, Framer-Motion
                        </p>
                        <div className="flex justify-around items-center gap-4">
                        <Link
                            to={"https://github.com/marufislamnadim"}
                            className=" btn btn-outline btn-info capitalize"
                        >
                            Client Side
                        </Link>{" "}
                        <Link
                            to={"https://educamp-summer-school.web.app/"}
                            className=" underline btn btn-outline btn-info capitalize "
                        >
                            Live
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5 overflow-hidden">
                        <div className="image-container">
                            <img
                                src={marvel}
                                alt="Marvel"
                                className="rounded-xl hover-scroll"
                            />
                        </div>
                    </figure>
                    <div className="card-body items-center text-left">
                        <h2 className="font-semibold text-left">
                            <span className="font-semibold text-cyan-500">
                                Project Title:{" "}
                            </span>{" "}
                            Marvel Playland Toy Store
                        </h2>
                        <p className="text-left">
                            <span className="font-semibold text-cyan-500">
                                Application Type:{" "}
                            </span>
                            Online Store Management System
                        </p>
                        <p className="text-left">
                            <span className="font-semibold text-cyan-500">
                                Technology:{" "}
                            </span>
                            ReactJS, ExpressJS, MongoDB, JWT, dotenv, axios,
                            firebase, Framer-Motion
                        </p>
                        <div className="flex justify-around items-center gap-4">
                        <Link
                            to={"https://github.com/marufislamnadim"}
                            className=" btn btn-outline btn-info capitalize"
                        >
                            Client Side
                        </Link>{" "}
                        <Link
                            to={"https://marvel-playland.web.app/"}
                            className=" underline btn btn-outline btn-info capitalize "
                        >
                            Live
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5 overflow-hidden">
                        <div className="image-container">
                            <img
                                src={esp}
                                alt="Espresso"
                                className="rounded-xl hover-scroll"
                            />
                        </div>
                    </figure>
                    <div className="card-body items-center text-left">
                        <h2 className="font-semibold text-left">
                            <span className="font-semibold text-cyan-500">
                                Project Title:{" "}
                            </span>{" "}
                            Espresso Pizzaria Coffee Shop
                        </h2>
                        <p className="text-left">
                            <span className="font-semibold text-cyan-500">
                                Application Type:{" "}
                            </span>
                            Online Food Service Management
                        </p>
                        <p className="text-left">
                            <span className="font-semibold text-cyan-500">
                                Technology:{" "}
                            </span>
                            ReactJS, ExpressJS, MongoDB, JWT, dotenv, axios,
                            firebase, Framer-Motion
                        </p>
                        <div className="flex justify-around items-center gap-4">
                        <Link
                            to={"https://github.com/marufislamnadim"}
                            className=" btn btn-outline btn-info capitalize"
                        >
                            Client Side
                        </Link>{" "}
                        <Link
                            to={"https://the-espresso-pizzeria.web.app/chefs"}
                            className=" underline btn btn-outline btn-info capitalize "
                        >
                            Live
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
