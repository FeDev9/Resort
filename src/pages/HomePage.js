import React from 'react'
import Hero from '../components/Hero'
import { SliderData } from '../data/Slider';
import InfoSection from '../components/InfoSection';
import { InfoData } from '../data/InfoData'


const HomePage = () => {



    return (
        <>
            <Hero slides={SliderData} />
            <InfoSection {...InfoData} />
        </>
    )
}

export default HomePage
