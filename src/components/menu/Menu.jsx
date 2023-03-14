import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiX } from 'react-icons/bi'
import "./Style.css"

export default function Menu() {
    const [menu, setMenu] = useState(false);
    const menuIsOpen = () => setMenu(!menu)
    const iconSize = 40
    const iconColor = '#fff'
    const navItems = [
        {
            display: 'Início',
            to: '/',
        },
        {
            display: 'Calculadora',
            to: 'calculator'
        },
        {
            display: 'ChatGPT',
            to: 'chatgpt'
        },
        {
            display: 'Bloco de notas',
            to: 'notepad'
        },
        {
            display: 'To-Do',
            to: 'todo'
        },
    ]

    // remove scroll when menu is open
    useEffect(() => {
        const scroll = document.getElementsByClassName('App')[0]
        if (menu) {
            scroll.style.overflowY = 'hidden'
        } else {
            scroll.style.overflowY = 'scroll'
        }
    }, [menu])


    return (
        <>
            {menu ? (
                <div className="menu">
                    <button id="closeMenu" onClick={menuIsOpen}>
                        <BiX size={iconSize} color={iconColor} />
                    </button>

                    <div className="menuHeader">
                        <h1><span>M</span>y<span>W</span>orkbench</h1>
                    </div>
                    <div className="menuOptions">
                        {navItems.map((item, i) => (
                            <Link to={item.to} key={i} className="menu-item" onClick={menuIsOpen}>
                                {item.display}
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <button id="openMenu" onClick={menuIsOpen}>
                    <BiMenu size={iconSize} color={iconColor} />
                </button>
            )
            }
        </>
    )
}