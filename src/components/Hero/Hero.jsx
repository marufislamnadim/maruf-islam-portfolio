import { TypeAnimation } from "react-type-animation";
import { GrDownload } from "react-icons/gr";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <div className="">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-lg">
                            <h1 className="text-lg font-semibold">
                                <TypeAnimation
                                    sequence={[
                                        "I am a Web Developer",
                                        1000,
                                        "I am a Full Stack Developer",
                                        1000,
                                        "I am a MERN Stack Developer",
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{
                                        fontSize: "2em",
                                        display: "inline-block",
                                    }}
                                    repeat={Infinity}
                                />
                            </h1>
                            <p className="py-6">
                                Welcome! As a dedicated web developer, I possess
                                a strong foundation in the MERN Stack. Let's
                                bring innovative digital solutions to life.
                            </p>
                            <div className="flex justify-center items-center gap-4">
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
        </div>
    );
};

export default Hero;
