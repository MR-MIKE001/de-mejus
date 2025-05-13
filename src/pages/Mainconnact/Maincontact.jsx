import React from 'react'
import Header from '../../components/Header/Header'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import Google from '../../components/GoogleMap/Google'

export default function Maincontact() {
  return (
    <div>
        <Header Header="CONTACT"/>
        <Contact/>
        <Google/>
        <Footer/>
    </div>
  )
}
