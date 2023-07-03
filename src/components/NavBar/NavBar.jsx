import { Link } from "react-router-dom";

import { useState } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
const NavBar = () => {
    const [theme, setTheme] = useState("dark");
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };
    const toggle = () => {
        if (theme === "dark") {
            setTheme("light");
            setDarkMode();
        } else {
            setTheme("dark");
            setLightMode();
        }
    };
    return (
        <div className="navbar bg-cyan-500 bg-opacity-90 text-white sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-cyan-500 bg-opacity-90 rounded-box w-52"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#about">About Me</a>
                        </li>
                        <li>
                            <Link to="#portfolio">Portfolio</Link>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>

                        <li>
                            <button
                                onClick={toggle}
                                className="font-semibold font-mono italic"
                            >
                                {theme}
                            </button>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Maruf</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center justify-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <Link to="#portfolio">Portfolio</Link>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                    <li>
                        <span
                            onClick={toggle}
                            className={
                                theme === "dark"
                                    ? "p-2 text-black"
                                    : "p-2 text-black"
                            }
                        >
                            {theme === "dark" ? (
                                <BsMoonFill className="text-md"></BsMoonFill>
                            ) : (
                                <BsFillSunFill className="text-md"></BsFillSunFill>
                            )}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
