import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import my from "../../public/images/my1.jpg"
const Nav = () => {
  return (
    <nav className='nav'>
      <h1>Progya.</h1>
     <p className='nav1'>
     <Link className='l' href='/'>Home</Link>
      <Link className='l' href='/About'>About me</Link>
      <Link className='l' href='/Projects'>Projects</Link>
     </p>
     <Image
      src={my}
      width={300}
      height={500}
      alt="My Photo"
    />

    </nav>
  )
}

export default Nav
