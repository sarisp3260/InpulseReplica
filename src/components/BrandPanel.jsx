import React from 'react'

import brand1 from '../img/Brand-1.png'
import brand2 from '../img/Brand-2.png'
import brand3 from '../img/Brand-3.png'
import brand4 from '../img/Brand-4.png'
import brand5 from '../img/Brand-5.png'
import brand6 from '../img/Brand-6.png'

const BrandPanel = () => {
  return (
    <div className='brandPanel'>

        <div className="containerBrand">
            <a href="#"><img src={brand1} alt="" /></a>
            <a href="#"><img src={brand2} alt="" /></a>
            <a href="#"><img src={brand3} alt="" /></a>
            <a href="#"><img src={brand4} alt="" /></a>
            <a href="#"><img src={brand5} alt="" /></a>
            <a href="#"><img src={brand6} alt="" /></a>
        </div>

    </div>
  )
}

export default BrandPanel