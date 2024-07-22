import React from 'react'
import Image from 'next/image'
import my from '../public/images/my1.jpg'
const Page = () => {
  return (
 <div className='home'>
  <div className='rec1'>

  </div>
  <div>
    
    <h1 >
    
    Hello! I am Progya Bhattacharjee
    </h1>
    <div className="animated-titles">
  <h2 className="title">Web Developer</h2>
  <h2 className="title">UI UX Designer</h2>
</div>
    <button>
      <a href="https://drive.google.com/file/d/1fHe53n4Y0O7mcv6CePfzM_uSSVzIEwAf/view?usp=sharing ">Resume</a></button>
  </div>
  <div className='rec2'>
    <div style={{ marginTop: '80px' }}>
    <Image
      src={my}
      width={300}
      height={500}
      alt="My Photo"
    />
    </div>

  </div>

 </div>
  )
}

export default Page
