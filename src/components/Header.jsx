import '../css/Header.css';

import {NavLink} from 'react-router-dom'

import {BsSearch,BsFillCartCheckFill} from 'react-icons/bs'
import {FaBars, FaTimes, FaReact} from 'react-icons/fa'

import React, { useState, useEffect } from 'react'
/* import FirtsSeccion from './FirtsSeccion' */

const Header = () => {

  /*--------------------- Start toogle Menu------------------------- */
  const [toogleMenu, setToogleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () =>{
    setToogleMenu(!toogleMenu)
    setShowInput(!true)
    setToogleCarShop(!true)
  }

  useEffect(() =>{

    const changeWidth = ()=>{
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    //clean fuction when you use useEffect, to erase the eventLisener from your memory

    return ()=>{
      window.removeEventListener('resize', changeWidth)
    }

  })
  /*--------------------- End toogle Menu------------------------- */

  /*--------------------- Start show Search input------------------------- */

  const [showInput, setShowInput] = useState (false)

  const inputSearch = () => {
    setShowInput(!showInput)
    setToogleMenu(!true)
    setToogleCarShop(!true)
    console.log(showInput)
  }

  /*--------------------- End show Search input------------------------- */
  /*--------------------- Start show Search input------------------------- */

  const [toogleCarShop, setToogleCarShop] = useState (false)

  const panelCarShop = () => {
    setToogleCarShop(!toogleCarShop)
    setToogleMenu(!true)
    setShowInput(!true)
    console.log(setToogleCarShop)
  }

  /*--------------------- End show Search input------------------------- */


  return (
    <div className='Header'>
        <div className="containerNav">
          <div className="logo">
            <h1>Inp<span className='logoColor'>ú</span>lse</h1>
          </div>
          {(toogleMenu || screenWidth > 991) &&(
          <nav> 
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/Pages">PAGES </NavLink>
            <NavLink to="#">BLOG</NavLink>
            <NavLink to="#">PORTAFOLIO</NavLink>
            <NavLink to="#">SHOP</NavLink>
            <NavLink to="#">CONTACT</NavLink>
          </nav>  
          )}  

          <div className="iconNav">
            <div className="search">
              {showInput && (
                <input type="text" placeholder='Search...' className='inputSearch'/>
              )}
              <BsSearch onClick={inputSearch}/>
            </div>
            <div className="carShop" onClick={panelCarShop}>
              <BsFillCartCheckFill/>

              {toogleCarShop && (
                <div className="panelCarShop">
                  <div className="boxItem">
                    <FaReact className='iconBig'/>
                    <h2>Car Item</h2>
                    <p>$100</p>
                    <FaTimes className='iconTimes'/>
                  </div>
                  <div className="boxItem">
                    <FaReact className='iconBig'/>
                    <h2>Car Item</h2>
                    <p>$100</p>
                    <FaTimes className='iconTimes'/>
                  </div>
                  <div className="boxItem">
                    <FaReact className='iconBig'/>
                    <h2>Car Item</h2>
                    <p>$100</p>
                    <FaTimes className='iconTimes'/>
                  </div>
                  <button className='panelButton'>Go to pay</button>
                </div>
              )}
            </div>
            <div className='menu' onClick={toggleNav}>
              <FaBars/>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Header


