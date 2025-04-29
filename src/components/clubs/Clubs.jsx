import React from 'react'
import Cards from '../cards/Cards'
import ICT from '../../img/ICT.jpg'
import jssb from '../../img/jssb.jpg'
import bus from '../../img/bus.jpg'
import './clubs.css'
export default function Clubs() {
  return (
    <div className='clubs'>
    <div className='head'>
    <h1>school facilities</h1>
    </div>
      
      <div className='car'>
      <Cards image={ICT} content="ICT LAB" btn="see more"/> 
       <Cards image={jssb} content="CLASS ROOM" btn="see more"/>
       <Cards image={bus} content="school entrance" btn="see more"/>
      </div>
      
    </div>
  )
}
