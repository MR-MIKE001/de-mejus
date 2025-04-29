import React from 'react'

import './cards.css'
import { Link } from 'react-router-dom'
export default function Cards({image,content,btn}) {
  
  
  return (
    <div className='card'>
    
    <img src={image} alt='demejus academy' />
    
        
        <div className='con'>
        <h1>{content}</h1>
        
        </div>
        <Link to="/facilities" className='button2'><button >{btn}</button></Link>
       
    </div>
    
  )
}
