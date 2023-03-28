import React, { useState, useEffect, useContext } from 'react'
import { navItems } from '../Constants'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { IoLogIn, IoLogOut } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'
import './Style.css'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation()
    const { user, singout } = useContext(AuthContext)

    // change active index
    useEffect(() => {
        // const curPath = window.location.pathname.split('/')[1];
        const curPath = window.location.pathname;
        const activeItem = navItems.findIndex(item => item.to === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location])

    return (
        <div className='sidebar'>
            <div>
                <h1><span style={{ color: '#0d6efd' }}>M</span>y<span style={{ color: '#0d6efd' }}>W</span>orkbench</h1>
                <hr />
                <div className='nav-container'>
                    {navItems.map((item, i) => (
                        <Link to={item.to} key={i} className={`sidebar-item ${activeIndex === i ? 'active' : ''}`}>
                            <span className="icon">{item.icon && item.icon}</span> {item.display}
                        </Link>
                    ))}
                </div>
            </div>
            <span className='user-options'>
                <span className="icon"><CgProfile /></span>
                {user ? (
                    <>{user} <button className='btn-logout' onClick={() => singout()}><IoLogOut /></button></>
                ) : (
                    <>Desconectado <Link className='btn-login' to="/login"><IoLogIn /></Link></>
                )}
            </span>


        </div>
    )
}

export default Sidebar