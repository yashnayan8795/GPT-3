import React from 'react'
// import {Article,Brand,CTA} from './components'
import {Footer,Blog,Possibility,Features,WhatGPT3,Header} from './containers';
import {CTA,Brand,Navbar} from './components';
import './App.css'
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
    
  )
}
export default App



/*
scroll animation 

npm i aos

import AOS from "aos";
import "aso/dis/aos.css";

now have to use :

useEffect(()=>(
  AOS.init({duration:"2000", delay :"1000"})
),[])

now in the class name for div you want to animate :

data-aos="fade-right"
   A lot is happening, <br /> We are blogging about it.
*/