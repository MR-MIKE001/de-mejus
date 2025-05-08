import React from 'react'
import './header.css'
import Nav from '../Nav/Nav'
import back from '../../img/bgd-2.jpg'
import { Link } from 'react-router-dom'

function Header({content,Header,btn}) {
  return (
    
    <div className='header'>
    <div className='bcimg'>
      <img src={back} alt='demejus academy' width="100%"/>
    </div>
    <div className='headerc'>
    <Nav/>
      <div className='content'>
      <h1>{Header}</h1>
      <p>{content} </p>
    {btn?(<Link to="/contact" className='hbutton'> <button className='button '>{btn}</button>
      </Link>):""} </div>
    </div>
     
      
    </div>
  )
}

export default Header