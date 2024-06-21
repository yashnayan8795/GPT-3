import React from 'react'
import './possibility.css'
import { useEffect } from 'react';
import PossibilityImage  from '../../assets/assets/possibility.png'
import Aos from "aos";
import 'aos/dist/aos.css'
const Possibility = () => {

  useEffect(()=>{
    Aos.init()
},[])

  return (
    <div className='gpt3__possibility section__padding' id='possibility' >
      <div className='gpt3__possibility-image' data-aos="fade-right"  data-aos-anchor-placement="top-center" >
        <img src={PossibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content' data-aos="fade-down"  data-aos-anchor-placement="top-center">
        <h4>Request early access to Get Started</h4>
        <h1 className='gradient__text'>Exploring Boundless  <br />Horizons with GPT Model's</h1>
        <p>YEmbark on a journey of discovery and innovation with the endless possibilities of GPT. From assisting in scientific research and medical diagnosis to powering creative storytelling and virtual world-building, GPT opens doors to a realm of limitless potential. Its ability to comprehend, generate, and adapt language empowers users to push the boundaries of what is conceivable, propelling us towards a future limited only by imagination. Join the revolution and explore the uncharted territories of what's possible with GPT.
</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}
export default Possibility