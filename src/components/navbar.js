import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <div className='links'>
      <nav className='flex mb-4 flex-wrap  items-center mx-auto bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
        <Link className='block pr-4 text-black md:pr-4 dark:text-white' to='/'>Home</Link>

        <Link className='block pr-4 text-black md:pr-4 dark:text-white' to='/about'>About</Link>

        <Link className='block pr-4 text-black md:pr-4 dark:text-white' to='mailto:info@devmoek.com'>Contact</Link>
      </nav>
    </div>
  )
}
