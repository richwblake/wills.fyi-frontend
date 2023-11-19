import NavBar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function Root() {

    return (
        <div id="all-content">
            <NavBar />

            <div id="main-content">
                <Outlet />
            </div>
        </div>
    );

}
