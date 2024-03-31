import React from 'react';
import CV from '../../assets/Tushar_kumar_patel.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        {/*<a href="../Resume.html" target="_blank" className='btn'>Resume</a>*/}
    </div>
  )
}

export default CTA