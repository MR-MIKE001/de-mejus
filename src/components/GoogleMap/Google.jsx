import React from 'react'
import './google.css'
function Google() {

  return (<div className='googlemap'>
  <h1 className='location'>Address</h1>
    <div  style={{position:'relative'}}>
    <div className='iframe' style={{overflow: "hidden",position: "relative",paddingBottom: "75%",  }}>
    <iframe title='demejus academy ' style={{position: "absolute", top: 0,left: 0, width: "100%", height: "100%", border:0}}  loading="lazy" src="https://maps.google.com/maps?q=Power+Line+Junction%2C+Dutse-Abuja&output=embed">

    </iframe></div>
    <a href="https://embeddablemap.com/"
     rel="noopener" target="blank" 
     style={{position: "absolute",width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0}} >
     embeddablemap.com

     </a></div></div>
  )
}

export default Google