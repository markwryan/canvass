import * as React from "react";
import { NavLink } from "react-router-dom";

function AppNav() {

    return (
        <div className="section">
            <header className="header">
                <NavLink to="/" className="button">Create</NavLink>
                <NavLink to="/all" className="button">View All</NavLink>
            </header>
        </div>
    );
}

export default AppNav;