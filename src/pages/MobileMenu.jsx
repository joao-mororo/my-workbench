import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../components/Constants";
import "../styles/MobileMenu.css"

export default function Menu() {
    return (
        <div className="menu">
            <div className="menuHeader">
                <h1><span>M</span>y<span>W</span>orkbench</h1>
            </div>
            <div className="menuOptions">
                {navItems.map((item, i) => (
                    <Link to={item.to} key={i} className="menu-item">
                        {item.display}
                    </Link>
                ))}
            </div>
        </div>
    )
}