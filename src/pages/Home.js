import React from 'react'
import { useParams } from 'react-router'
import { SliderData } from '../data/Slider';
import Error from './Error';

const Home = ({ home }) => {
    const { slug } = useParams();
    const tempHome = SliderData.filter(home => {
        if (home.title === slug)
            return home
        else return null
    })

    return (
        <>
            {(tempHome.length !== 1 || tempHome === undefined) ? <Error /> :

                <>
                    <div className="error-wrapper">
                        <img className='error-img' src={tempHome[0].image} alt='Error 404' />
                        <div className="error-content">
                            <h1>{tempHome[0].title}</h1>
                            <p>{tempHome[0].price}</p>
                        </div>
                    </div>

                    <div className="home-details">
                        <div className="left-col">
                            <h1>Details</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsum ut? Maxime voluptatem sint nam odit eius sed modi beatae enim, itaque qui placeat, illum ducimus veritatis aut mollitia laboriosam?</p>
                        </div>
                        <div className="right-col">
                            <img src={tempHome[0].image} alt="" />
                        </div>

                    </div>
                </>
            }
        </>
    )
}

export default Home
