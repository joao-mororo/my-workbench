import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Style.css'

const sidebarNavItems = [
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
    {
        display: 'Notes',
        to: 'notes'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation()

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.to === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location])

    return (
        <div className='sidebar'>
            <h1><span style={{color: '#0d6efd'}}>M</span>y<span style={{color: '#0d6efd'}}>W</span>orkbench</h1>
            <hr />
            <div className='nav-container'>
                {sidebarNavItems.map((item, i) => (
                    <Link to={item.to} key={i} className={`sidebar-item ${activeIndex === i ? 'active' : ''}`}>
                        {item.display}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar