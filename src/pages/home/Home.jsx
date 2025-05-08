import React from 'react'
import Header from '../../components/Header/Header'
import Aboutsec from '../../components/aboutsec/Aboutsec'
import Clubs from '../../components/clubs/Clubs'
import CON from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

function Home() {
  return (<div>
    <Header Header="DE-MEJUS ACADEMY" content="At DE-MEJUS ACADEMY, we provide a nurturing and academically rigorous environment for students in Abuja, Nigeria. Our international curriculum, experienced faculty, and strong STEM programs set us apart among the best private schools in Abuja." btn="contact us"/>
    <Aboutsec/>
    <Clubs/>
    <CON/>
    <Footer/>
    
    
  </div>
    
  )
}

export default Home