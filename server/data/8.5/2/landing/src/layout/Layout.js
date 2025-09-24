import {Outlet} from "react-router-dom";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Navigation} from "./Navigation";

export const Layout = () => {
    
    return (
        <div className="layout">
            <Header />
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
};