import React, { useEffect, useState } from 'react'
import './nav.css'
import logo from '../../img/logo.png'
import { UilArrowCircleLeft,  UilBars,} from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

export default function Nav() {
const[visible,setvisible]=useState(false)


useEffect(()=>{
    if( window.screen.width>854){
       setvisible(true)
    }else{
        setvisible(false)
    }

},[])

function handlemenu(){

   setvisible(true)
   
}
function handleclose(){
setvisible(false)

}


    return (
    <div className='nav'>
        <div className='nleft'>
            <img src={logo} alt='DE_MEJUS ACADEMY LOGO' width="200px"/>
        </div>
        <div onClick={handlemenu}  
        style={{display:visible?"none":"flex"}} 
        className='menu' ><UilBars size={40}/></div>
        <div className='nright'
         style={{display:visible?"flex":"none"}}>
        <div onClick={handleclose} className='menu2'> 

        <UilArrowCircleLeft/></div>
            <ul className='kk'>
               <Link to="/" ><li>home</li></Link> 
               <Link to="/about" ><li>about</li></Link> 
               <Link to="/facilities"><li>facilities&clubs</li></Link> 
               <Link to="/contact"><li>contacts</li></Link> 
            </ul>
        </div>
    </div>
  )
}
