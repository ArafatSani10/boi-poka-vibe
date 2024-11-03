import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navber/NavBar";
import Footer from "./Footer/Footer";


const Must = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Must;