import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navber/NavBar";
import Footer from "./Footer/Footer";


const Must = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Must;