import React from 'react'
import './footer.css'
import {UilFacebook,UilWhatsapp,UilPhone,UilInstagram, UilCommentAltMessage} from '@iconscout/react-unicons'
import logo from '../../img/logo.png'
import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <div className='footer'>
<div className='up'>
<div className='fleft'>
<div className='uli'>
    <UilPhone size={50} color="white"/>
    <a href='tel:+2348103122232'>+234 810 312 2232</a>
</div>
<div className='uli'>
    <UilWhatsapp size={40} color="white"/>
    <a target='blank' href='https://wa.me/+2348103122232'>+234 810 312 2232</a>
</div>
<div className='uli'>
    <UilCommentAltMessage size={40} color="white"/>
    <a target='blank' href='mailto:demejusacademy001@gmail.com'>demejusacademy001@gmail.com</a>
</div>
<div className='uli'>
    <UilInstagram size={40} color="white"/>
    <a target='blank' href='https://www.instagram.com/de_mejusacademy?igsh=dW9weXZubHVqM3Ry'>@de_mejusacademy</a>
</div>
<div className='uli'>
    <UilFacebook size={40} color="white"/>
    <a target='blank' href='https://www.facebook.com/profile.php?id=61568933180664'>de_mejusacademy</a>
    
</div>
</div>
<div className='fright'>
     <img src={logo} alt='demejus academy logo'/>
    <h1>DE_MEJUS ACADEMY</h1> 
    <span>Power Line Junction, Dutse-Abuja</span>
</div>
</div>
<div className='pow'>
<motion.div
style={{left:"-2rem"}}
 whileInView={{left:"30%"}}
initial={{left:"-20rem"}}
transition={{duration:2}}
 className='power'
 >
 <span className='footest'>powered by <a href='https://web-dev-z4zn.onrender.com' target='blank'>WebSpark</a> contact:  <a href='https://wa.me/+2347086131540'> +2347086131540</a> or call <a href='tel:+2347086131540'>07086131540</a></span>
</motion.div>    
</div>

    </div>
    
  )
}
//demejus academy logo