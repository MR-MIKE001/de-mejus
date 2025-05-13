import React, { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
export default function Contact() {
    const [user,setuser]=useState("")
    const [email,setemail]=useState("")
    const [content,setcontent]=useState("")

        const form = useRef();
      
        const sendEmail=(e)=>{
         e.preventDefault();
         emailjs.sendForm('service_rwynrg5', 'template_njdb4ji', form.current, '40FBwbA7TtkG8a-e9')
         .then((result)=>{
          alert("message sent")
          setcontent("")
          setemail("")
          setuser("")
         })
         .catch((err)=>{alert("failled")
          setcontent("")
          setemail("")
          setuser("")
         });
        }
  return (
    <div className='contact' id='contact'>
        <div className='c-left'>
            <div className='awesome'>
                <span>get in touch</span>
                <span className='it'>contact us</span>
                
     
            </div>
        </div>
        <div className='c-right'> 
        <form ref={form}  onSubmit={sendEmail}>
            <input type="text" value={user} onChange={e=>setuser(e.target.value)} name='user-name' className='user' placeholder='name'/>
            <input type="email" value={email} onChange={e=>setemail(e.target.value)} name='user-email' className='user' placeholder='email'/>
            <textarea name='message' value={content} onChange={e=>setcontent(e.target.value)} className='user'  placeholder='message'
            >

            </textarea>
            <button type='summit'  className='button '>send</button>
            
        </form>
       
        </div>
    </div>
  )
}
