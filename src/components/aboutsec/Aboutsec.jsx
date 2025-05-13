import React from 'react'
import './aboutsec.css'
import director from '../../img/director-img (1).jpg'
import teacher from '../../img/head-teachet-img.jpg'
function Aboutsec() {
  //Oghoghosa Akhianmiegbe
  //Chief Chris Echezona Emejulu
  return (
    <div className='aboutsec'>
     <div className='about'>
     <div className='aboutdiv'><img src={director}  alt='director head teacher' />
     <div className='named'><h1>Chief Chris Echezona Emejulu</h1>
     <h3>Director of DE-MEJUS Academy</h3>
     </div>
     </div>

        <p>VISION: To create a school that foster a vibrant, inclusive learning environment where every student feels empowered to reach their full potential, developing not only academic excellence but also critical thinking, creative and social responsibility, preparing them to active adaptable citizens in an ever-changing world, a space that prioritizes personalized learning, celebrates diversity and cultivates a genuine love for lifelong learning,
        Unlock your child's potential at De-Mejus Academy, a nurturing and vibrant educational environment designed for every stage of early development. From our loving creche to our dynamic primary and junior schools, we are dedicated to fostering curiosity, creativity, and confidence in every child. <a href='/about'>see more</a></p>
     </div>
     <div className='about2'>

        
        <p>Our Vision At De-Mejus Academy, we envision a vibrant learning community where every child is empowered to discover their potential, embrace curiosity, and thrive in an ever-changing world. We strive to shape compassionate, critical thinkers who lead with integrity, celebrate diversity, and make meaningful contributions to society. Our mission is to provide a nurturing, inclusive, and forward-thinking educational environment where students grow academically, socially, and emotionally. Through innovative teaching, strong values, and personalized learning, we equip students to lead with purpose, serve with compassion, and succeed with confidence.<a href='/about'>see more</a></p>
    
    <div className='aboutdiv'><img src={teacher}  alt='demejus academy head teacher' />
    <div className='named'><h1>Oghoghosa Akhianmiegbe</h1>
     <h3>Head Teacher of DE-MEJUS Academy</h3>
     </div></div>

     </div>
     <div className='about3'>
     <div  className='aboutdiv '><img src={teacher}  alt='demejus academy head teacher' />
    <div className='named'>
    <h1 >Oghoghosa Akhianmiegbe</h1>
     <h3>Head Teacher of DE-MEJUS Academy</h3>
     </div></div>
        <p >Head Teacher: Our Vision
At De-Mejus Academy, we envision a vibrant learning community where every child is empowered to discover their potential, embrace curiosity, and thrive in an ever-changing world.
We strive to shape compassionate, critical thinkers who lead with integrity, celebrate diversity, and make meaningful contributions to society.
<a href='/about'>see more</a></p>
     </div>
    </div>        
  )
}

export default Aboutsec