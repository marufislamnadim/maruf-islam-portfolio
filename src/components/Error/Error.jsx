import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
    return (
        <div className="mx-auto text-center w-full p-5">
            <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
            </div>

            <div className="">
                <h3 className="h2">Look like you are lost</h3>

                <p>the page you are looking for not available!</p>

                <Link href="/" className="link_404 rounded-md">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
