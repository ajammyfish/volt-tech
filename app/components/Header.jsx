import React from 'react'
import Link from 'next/link'
import { FaBolt } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header'>
        <div className='nav-container'>
            <div className='logo'>
                <Link href='/'>Volt Tech <FaBolt style={{color: 'greenyellow'}} /></Link>
            </div>
        </div>
    </header>
  )
}

export default Header