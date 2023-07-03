import edu from "../../assets/edu_full.png";
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div id="portfolio" className="my-16">
            <h1 className="text-5xl font-bold text-cyan-500 text-center mb-5"><span className=" border-b-2">My Portfolio!</span> </h1>
            <div className="flex justify-center items-center flex-wrap">
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
                    <h2 className="font-semibold "><span className="font-semibold text-cyan-500">Project Title: </span> EduCamp Summer School</h2>
                    <p className=""><span className="font-semibold text-cyan-500">Application Type: </span>Educational Institute Management System</p>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Portfolio;
