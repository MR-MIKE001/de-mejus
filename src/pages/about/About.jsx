import React from 'react'
import './about.css'
import Header from '../../components/Header/Header'

import Footer from '../../components/footer/Footer'

import Sec from '../../components/sec/Aboutsec'
export default function About() {
  return (
    <div>
        <Header Header="about"/>
      <Sec/>
        <Footer/>
    </div>
  )
}
