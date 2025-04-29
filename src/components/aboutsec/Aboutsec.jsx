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

        
        <p>Head Teacher: **Vision Statement for De-Mejus Academy**
At De-Mejus Academy, we envision a transformative educational environment that empowers every student to realize their fullest potential. Our commitment is to cultivate a diverse and inclusive community where academic excellence, creativity, and critical thinking thrive. We aspire to be a beacon of innovation in education, integrating cutting-edge technology with holistic learning experiences that prepare our students for the complexities of the global landscape.
We aim to foster lifelong learners who are not only equipped with knowledge but also possess the skills necessary for effective communication, collaboration, and problem-solving. Our graduates will emerge as compassionate leaders who embrace diversity and champion social responsibility within their communities.
Through partnerships with families, local organizations, and global networks, De-Mejus Academy seeks to create an enriching ecosystem that supports personal growth and encourages exploration beyond traditional boundaries.<a href='/about'>see more</a></p>
    
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
        <p >Head Teacher: **Vision Statement for De-Mejus Academy**
At De-Mejus Academy, we envision a transformative educational environment that empowers every student to realize their fullest potential. Our commitment is to cultivate a diverse and inclusive community where academic excellence, creativity, and critical thinking thrive. We aspire to be a beacon of innovation in education, integrating cutting-edge technology with holistic learning experiences that prepare our students for the complexities of the global landscape.
We aim to foster lifelong learners who are not only equipped with knowledge but also possess the skills necessary for effective communication, collaboration, and problem-solving. Our graduates will emerge as compassionate leaders who embrace diversity and champion social responsibility within their communities.
Through partnerships with families, local organizations, and global networks, De-Mejus Academy seeks to create an enriching ecosystem that supports personal growth and encourages exploration beyond traditional boundaries. We envision our academy as a nurturing space where curiosity is ignited; talents are discovered; cultural heritage is celebrated; and every individual feels valued.
Ultimately, our vision is to inspire future generations of thinkers and doers who will contribute positively to society while upholding the values of integrity, respect, empathy, and resilience. At De-Mejus Academy—where dreams take flight—we believe in shaping not just scholars but well-rounded individuals ready to make meaningful impacts in an ever-evolving world.
<a href='/about'>see more</a></p>
     </div>
    </div>        
  )
}

export default Aboutsec