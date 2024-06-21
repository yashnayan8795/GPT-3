import React from 'react'
import {google,slack,atlessian,shopify,dropbox} from './import'
import './brand.css'
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlessian} alt="atlessian" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  )
}
export default Brand