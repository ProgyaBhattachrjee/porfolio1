import React from 'react'
import { FaEnvelope ,FaPhone,FaGithub} from 'react-icons/fa6'
const Foot = () => {
  return (
  <footer>
        <div className="foot">
    <div className='foot1'>
        
    <p className='f1'>
        <FaEnvelope/> Mail: <a href="mailto:progya56@gmail.com" >progya56@gmail.com</a></p>
            <p className='f1'>
                <FaPhone/>
                Phone no: <a href="tel:7602067515" >7602067515</a></p>
            <p className='f1'>
                <FaGithub/>
                Github: <a href="https://github.com/ProgyaBhattachrjee">visit</a></p>
    </div>
            <p>&copy; 2024 Progya. All rights reserved.</p>
        </div>
  </footer>
  )
}

export default Foot
