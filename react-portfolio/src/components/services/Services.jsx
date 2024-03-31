import React from 'react'
import './services.css'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {TbCheckupList} from 'react-icons/tb'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3><BsFillCartCheckFill />Web Development</h3>  
          </div>  
          <ul className="service__list">
            <li><TbCheckupList />Appealing and professional pages.</li>
            <li><TbCheckupList />Checking of broken links/scripts.</li>
            <li><TbCheckupList />Optimized for mobile devices.</li>
            <li><TbCheckupList />Matching current trends.</li>  
          </ul>
        </article>  

        {/* End of UI/UX services in the list */}

        <article className="service">
          <div className="service__head">
            <h3><BsFillCartCheckFill />Backend Development</h3>  
          </div>  
          <ul className="service__list">
          <li><TbCheckupList />API development and Integration.</li>
            <li><TbCheckupList />Web applications services.</li>
            <li><TbCheckupList />Cloud back-end solutions.</li>  
            <li><TbCheckupList />Custom development.</li>
          </ul>
        </article>  

        {/* End of Web Development services in the list */}

        <article className="service">
          <div className="service__head">
            <h3><BsFillCartCheckFill />Content Creation</h3>  
          </div>  
          <ul className="service__list">
            <li><TbCheckupList />Educational contents.</li>
            <li><TbCheckupList />Interview contents.</li>
            <li><TbCheckupList />Blogs writing.</li>  
            <li><TbCheckupList />E-books.</li>
          </ul>
        </article>  

        {/* End of Content Creation services in the list */}
      </div>  
    </section>
    
  )
}

export default Services