import React from 'react'

import Img1 from '../assets/images/avatar-jessica.jpeg'
import Inter from "@fontsource/inter"; // Defaults to weight 400
const Home = () => {
   
  return (
    <div className='container' style={{fontFamily:{Inter}}}>
        
        <div className='profilBox'>
            <div className='profilPhoto'>
                <img src={Img1} alt="" />

            </div>
            <div className='profilText' >
                <h1>Jessica Randall</h1>
                <p>London,United Kingdom</p>

            </div>
            <div className='fonrtend'>
                <p>"Front-end developer and avid reader."</p>

            </div>

            <div className='profilSkills'>
                <div className='section'>
                    <p>GitHub</p>

                </div>
                <div className='section'>
                    <p>Fronend Mentor</p>

                </div>
                <div className='section'>
                    <p>LinkedIn</p>

                </div>
                <div className='section'>
                    <p>Twitter</p>

                </div>
                <div className='section'>
                    <p>Instagram</p>

                </div>

            </div>

        </div>


    </div>
  )
}

export default Home