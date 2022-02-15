import '../css/Pages.css'
import React from 'react'


const CardPage = ({image, text}) => {
  return (
    <div className='container-Card'>

        <div className="cardStyle">
            <img src={image} alt="" />
            <p>{text}</p>
        </div>

    </div>
  )
}

export default CardPage