import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
    e.target.reset()
  };
  

  return (
    <section id='contact'>
      <h2>Get In Touch</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tusharp26j@gmail.com</h5>
            <a href="mailto:tusharp26j@gmail.com" target="_blank">Send a message</a>
          </article>
          
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Tushar Kumar Patel</h5>
            <a href="https://www.linkedin.com/in/tushar26/" target="_blank">Let's Connect</a>
          </article>
          
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+918989090039</h5>
            <a href="https://api.whatsapp.com/send?phone=8989090039" target="_blank">Send a message</a>
          </article>
        </div>

        {/* End of Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact Me</h2>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>  
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>  
    </section>
  )
}

export default Contact