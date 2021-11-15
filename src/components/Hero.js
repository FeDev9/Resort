import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'



const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const timeout = useRef(null)

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)

    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }



    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000)

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])


    return (
        <section className='hero-section'>
            <div className="hero-wrapper">
                {slides.map((slide, index) => {
                    return (
                        <div className="hero-slide" key={index}>
                            {index === current && (
                                <div className="hero-slider">
                                    <img className="hero-img" src={slide.image} alt={slide.alt} />
                                    <div className="hero-content">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <Link to={`${slide.path}/${slide.title}`} className='btn btn-primary btn-small' style={{ maxWidth: '160px' }}>
                                            {slide.label}
                                            <IoMdArrowRoundForward className='arrow' />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className="slider-btn">
                <IoArrowBack className='arrow-btn' onClick={prevSlide} />
                <IoArrowForward className='arrow-btn' onClick={nextSlide} />
            </div>
        </section >
    )
}

export default Hero
