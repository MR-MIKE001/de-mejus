import React, { useEffect, useState } from 'react'
import './nav.css'
import logo from '../../img/logo.png'
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
        className='menu' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</div>
        <div className='nright'
         style={{display:visible?"flex":"none"}}>
        <div onClick={handleclose} className='menu2'> 

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

</div>
        <ul className='kk'>
               <Link to="/" ><li>Home</li></Link> 
               <Link to="/about" ><li>About</li></Link> 
               <Link to="/facilities"><li>Facilities&clubs</li></Link> 
               <Link to="/contact"><li>Contacts</li></Link> 
        </ul>
        </div>
    </div>
  )
}
