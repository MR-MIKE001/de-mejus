import React from 'react'
import Cards from '../cards/Cards'
import bus from '../../img/bus.jpg'
import ICT from '../../img/ICT.jpg'
import jssb from '../../img/jssb.jpg'
import robot from '../../img/robotic.jpg'
import scamble from '../../img/scrammble.jpg'
import tailoring from '../../img/tailoring.jpg'
import './club2.css'
export default function Club2() {
  return (
    <div className='club2'>
    <div className='head2'>
    <h1>school facilities</h1>
    </div>
      
      <div className='car2'>
      <Cards image={ICT} content="ICT LAB"/> 
       <Cards image={jssb} content="CLASS ROOM"/>
       <Cards image={bus} content="school entrance"/>
      </div>
      <div className='car2'>
      <Cards image={robot} content="ROBOTIC"/> 
       <Cards image={tailoring} content="TAILORING"/>
       <Cards image={scamble} content="SCRAMBLE"/>
      </div>
      
    </div>
  )
}
