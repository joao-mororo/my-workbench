import React from "react";
import { Link } from "react-router-dom";
import "../styles/MobileMenu.css"

export default function Menu() {
    const navItems = [
        {
            display: 'Início',
            to: '/',
        },
        {
            display: 'Calculadora',
            to: '/calculator'
        },
        {
            display: 'ChatGPT',
            to: '/chatgpt'
        },
        {
            display: 'Bloco de notas',
            to: '/notepad'
        },
        {
            display: 'To-Do',
            to: '/todo'
        },
        {
            display: 'Notes',
            to: '/notes'
        },
    ]

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