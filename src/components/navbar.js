import { Link } from 'gatsby'
import React from 'react'

const activeStyles = {
  fontWeight: 'bold'
}

export default function Navbar() {
  return (
    <div className='links'>
      <nav className='flex mb-4 flex-wrap  items-center mx-auto bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
        <Link className='block pr-4 text-black md:pr-4 dark:text-white hover:text-rose-500' to='/' activeStyle={activeStyles}>Home</Link>
        <Link className='block pr-4 text-black md:pr-4 dark:text-white hover:text-rose-500' to='/about' activeStyle={activeStyles}>About</Link>
        <Link className='block pr-4 text-black md:pr-4 dark:text-white hover:text-rose-500' to='/reviews' activeStyle={activeStyles}>Reviews</Link>
        <a className='block pr-4 text-black md:pr-4 dark:text-white hover:text-rose-500' href='mailto:info@devmoek.com'>Contact</a>      </nav>
    </div>
  )
}
