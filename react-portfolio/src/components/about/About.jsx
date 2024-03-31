import React from 'react'
import './about.css'
import Tushar from '../../assets/B = 87A1.JPG'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>  
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="Tusharprof">
            <img src={Tushar}  alt="About Image" />  
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>5 Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderActive className='about__icon' />
              <h5>Projects</h5>
              <small>7</small>
            </article>
          </div>
          <p>
            I have complete project depending on the client requirements like creation of dataset, detailed analysis of the dataset which involves cleaning of the dataset, removal of empty row, visualization of the dataset, model building of the dataset and lastly comes to the conclusion part. 
            <br/>Analysis of the dataset which was provided by the client. 
            <br/>Currently the analysis of forest dataset is going on.
            
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about