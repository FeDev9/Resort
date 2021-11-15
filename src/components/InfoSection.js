import React from 'react'
import { Link } from 'react-router-dom'

const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, image }) => {
    return (
        <section className='info-section'>
            <div className="info-container">
                <div className="info-column-left">
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Link to='homes' className='btn btn-primary btn-big'>{buttonLabel}</Link>
                </div>
                <div className="info-column-right">
                    <img src={image} alt="home" />
                </div>
            </div>
        </section>
    )
}

export default InfoSection
