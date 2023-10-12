import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>

        <div className=''>
          <img src ={urlFor(heroBanner.image)} width={1295} height={400} className='hero-banner-image' />
        </div>

        <div className=''>

          <Link href = {`/product/${heroBanner.product}`}>
            <button type='button'> {heroBanner.buttonText}</button>
          </Link>
        </div>

        <div className=''>
          <p> {heroBanner.desc}</p>
       </div>


    
    </div>
  )
}

export default HeroBanner