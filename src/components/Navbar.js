import React from 'react'

import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { GoThreeBars } from 'react-icons/go'

const Navbar = ({ toggle }) => {
    return (
        <div className='nav'>
            <Link to='/' className='logo nav-link'>FEDEV</Link>
            <GoThreeBars className='menubars' onClick={toggle} />
            <div className='navmenu'>
                {menuData.map((item, index) => {
                    return (
                        <Link className="nav-menu-links nav-link" to={item.link} key={index}>
                            {item.title}
                        </Link>
                    )
                })}
            </div>

            <Link className='btn btn-primary btn-big' to='/contact'>Contact Us</Link>

        </div >
    )
}

export default Navbar