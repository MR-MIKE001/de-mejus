import React from 'react'
import './header.css'
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'

function Header({content,Header,btn}) {
  return (
    <div className='header'>
      <Nav/>
      <div className='content'>
      <h1>{Header}</h1>
      <p>{content} </p>
    {btn?(<Link to="/contact" className='hbutton'> <button className='button '>{btn}</button>
      </Link>):""} </div>
      
    </div>
  )
}

export default Header