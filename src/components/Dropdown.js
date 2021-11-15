import React from 'react'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { FaTimes } from 'react-icons/fa'


const Dropdown = ({ toggle, isOpen }) => {
    return (
        <div className={isOpen ? 'dropdown-container isOpen' : 'dropdown-container'}>
            <div className="icon" onClick={toggle} >
                <FaTimes className="close-icon" />
            </div>
            <div className="dropdown-wrapper">
                <div className="dropdown-menu">
                    {menuData.map((item, index) => (
                        <Link to={item.link} onClick={toggle} className='dropdown-link' key={index}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className='btn-wrap'>
                    <Link to='/contact' className='btn btn-primary btn-big' style={{ margin: 0 }}>
                        Contact us
                    </Link>
                </div>


            </div>

        </div >
    )
}

export default Dropdown
