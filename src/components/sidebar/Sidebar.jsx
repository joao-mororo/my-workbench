import React, { useState, useEffect } from 'react'
import { navItems } from '../Constants'
import { Link, useLocation } from 'react-router-dom'
import './Style.css'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation()

    // change active index
    useEffect(() => {
        // const curPath = window.location.pathname.split('/')[1];
        const curPath = window.location.pathname;
        const activeItem = navItems.findIndex(item => item.to === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location])

    return (
        <div className='sidebar'>
            <h1><span style={{color: '#0d6efd'}}>M</span>y<span style={{color: '#0d6efd'}}>W</span>orkbench</h1>
            <hr />
            <div className='nav-container'>
                {navItems.map((item, i) => (
                    <Link to={item.to} key={i} className={`sidebar-item ${activeIndex === i ? 'active' : ''}`}>
                        <span className="icon">{item.icon && item.icon}</span> {item.display}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar