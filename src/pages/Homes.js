import React from 'react'
import { SliderData } from '../data/Slider'

import Image from '../images/imageTwo.jpg'
import { Link } from 'react-router-dom'

const Homes = () => {

    return (
        <>

            <div className="error-wrapper">
                <img className='error-img' src={Image} alt='Error 404' />
                <div className="error-content" style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <h1>OUR HOMES</h1>
                    <p>Discover our beautiful homes</p>
                </div>
            </div>
            <div className="homes-container">
                {SliderData.map((home, index) => {
                    return (
                        <Link to={`${home.path}/${home.title}`} className="home-wrapper" key={index}>
                            <img src={home.image} alt="homes" />
                            <h1>{home.title}</h1>
                            <p>{home.price}</p>

                        </Link>
                    )
                })}
            </div>






        </>
    )
}

export default Homes
