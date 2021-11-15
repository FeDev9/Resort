import React from 'react'
import Image from '../images/imageOne.jpg'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>

            <div className="error-wrapper">
                <img className='error-img' src={Image} alt='Error 404' />
                <div className="error-content">
                    <h1>Error 404</h1>
                    <p>Page Not Found</p>
                    <Link to='/' className='btn btn-primary btn-small'>
                        Back to homepage
                    </Link>
                </div>
            </div>


        </>
    )

}

export default Error
