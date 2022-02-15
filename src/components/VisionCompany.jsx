import '../css/ComInfo-Vision.css';
import React from 'react'
import BrandPanel from './BrandPanel';

const VisionCompany = () => {
  return (
    <div className='visionCompany'>

        <div className="contVision">
            <div className="yearsLogo">
                <h1>25 YRS</h1>
            </div>
            <div className="textVision">
                <h2>WE BRING YOUR IDEAS TO LIFE</h2>
                <span>- We love creating</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero aliquam, fugit quia esse ipsum quis culpa quas tenetur, eos magnam, eaque atque. At sapiente earum voluptas, consectetur beatae tempore.</p>

                <button className='btnVision'>Read More</button>
            </div>
        </div>

        <BrandPanel />

    </div>
  )
}

export default VisionCompany