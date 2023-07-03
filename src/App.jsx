import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
    const [preLoading, setPreLoading] = useState(true);
    const preLoader = document.getElementById("preLoader");

    if (preLoader) {
        setTimeout(() => {
            preLoader.style.display = "none";
            setPreLoading(false);
        }, 1000);
    }
    return (
        !preLoading && (
            <>
              
                <Outlet></Outlet>
            </>
        )
    );
}

export default App;
