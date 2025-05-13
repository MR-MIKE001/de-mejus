import React from 'react'
import './aboutsec.css'
import director from '../../img/director-img (1).jpg'
import teacher from '../../img/head-teachet-img.jpg'

function Sec() {
  return (
    <div className='aboutsec'>
     <div className='about'>
     <div className='aboutdiv'><img src={director}  alt='director demejus academy' />
     <div className='named'><h1>Chief Chris Echezona Emejulu</h1>
     <h3>Director of DE-MEJUS Academy</h3>
     </div>
     </div>
<p>
        <p>VISION: To create a school that foster a vibrant, inclusive learning environment where every student feels empowered to reach their full potential, developing not only academic excellence but also critical thinking, creative and social responsibility, preparing them to active adaptable citizens in an ever-changing world, a space that prioritizes personalized learning, celebrates diversity and cultivates a genuine love for lifelong learning,
        Unlock your child's potential at De-Mejus Academy, a nurturing and vibrant educational environment designed for every stage of early development. From our loving creche to our dynamic primary and junior schools, we are dedicated to fostering curiosity, creativity, and confidence in every child. 
           </p>
         
         </p>
        </div>
        
     <div className='about2'>
     <p>Our Vision At De-Mejus Academy, we envision a vibrant learning community where every child is empowered to discover their potential, embrace curiosity, and thrive in an ever-changing world. We strive to shape compassionate, critical thinkers who lead with integrity, celebrate diversity, and make meaningful contributions to society.Our mission is to provide a nurturing, inclusive, and forward-thinking educational environment where students grow academically, socially, and emotionally. Through innovative teaching, strong values, and personalized learning, we equip students to lead with purpose, serve with compassion, and succeed with confidence.
     
</p> 
        
        <div className='aboutdiv'><img src={teacher}  alt='demejus academy head teacher' />
    <div className='named'><h1>Oghoghosa Akhianmiegbe</h1>
     <h3>Head Teacher of DE-MEJUS Academy</h3>
     </div></div>

     </div>
     <div className='about3'>
     <div className='aboutdiv'><img src={teacher}  alt='demejus academy head teacher' />
    <div className='named'><h1>Oghoghosa Akhianmiegbe</h1>
     <h3>Head Teacher of DE-MEJUS Academy</h3>
     </div></div>
        <p>Our Vision At De-Mejus Academy, we envision a vibrant learning community where every child is empowered to discover their potential, embrace curiosity, and thrive in an ever-changing world. We strive to shape compassionate, critical thinkers who lead with integrity, celebrate diversity, and make meaningful contributions to society. Our Mission is to provide a nurturing, inclusive, and forward-thinking educational environment where students grow academically, socially, and emotionally. Through innovative teaching, strong values, and personalized learning, we equip students to lead with purpose, serve with compassion, and succeed with confidence.</p>
     </div>
     <div className='jun'>
     <h3 className='ups'>Creche</h3> Our warm and welcoming creche provides a safe haven for your little ones. With engaging activities tailored to their developmental needs, we ensure that each
         child feels loved and supported as they explore the world around them
        
        <h3 className='ups'>Early Years Sessions </h3>
        At De-Mejus Academy, we believe that the foundation of learning begins in the early years. Our interactive sessions promote social skills, emotional growth, and cognitive development through play-based learning. Watch as your child blossoms into an eager learner!
      <h3 className='ups'> Junior School  </h3>
        <p>In our junior school program, students are encouraged to take ownership of their education. With personalized support from passionate teachers and access to diverse extracurricular activities, children develop leadership qualities while preparing for future challenges</p> 
        <h3 className='ups'>Primary School </h3>
        <p> As children transition into primary school, our dedicated educators inspire a love for learning through innovative teaching methods. We offer a well-rounded curriculum that emphasizes academic excellence while nurturing critical thinking skills and creativity.</p>
        <h3 className='ups'> Why Choose De-Mejus Acadeli  </h3>
        <ul className='mylist'>
        <li className='subups'>Experienced & Caring Staff</li>
         <li className='subups'>Safe & Stimulating Environment</li>
         <li className='subups'>Holistic Development Focus</li>
         <li className='subups'>Strong Community Values</li>
        </ul>
        </div>
    </div>
    
  )
}

export default Sec