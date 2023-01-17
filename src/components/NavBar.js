import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <div>
            <hr />
            <ul className='menu'>

                <Link to='/' className={({ isActive }) => 
                `link-style ${isActive ? 'link-active' : ''}`} >
                    <li>Home</li>
                </Link>
                
                <Link to='/players' className={({ isActive }) => 
                `link-style ${isActive ? 'link-active' : ''}`} >
                    <li>Players</li>                
                </Link>

                <Link to='/matches' className={({ isActive }) => 
                `link-style ${isActive ? 'link-active' : ''}`} >
                    <li>Matches</li>                
                </Link>

                <Link to='/honours' className={({ isActive }) => 
                `link-style ${isActive ? 'link-active' : ''}`} >
                    <li>Honours</li>                
                </Link>

                <Link to='/about' className={({ isActive }) => 
                `link-style ${isActive ? 'link-active' : ''}`} >
                    <li>About</li>                
                </Link>
            </ul>
        </div>
    )
}

export default Nav
