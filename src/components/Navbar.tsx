import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[100%] h-[60px] bg-[#ffc971] flex justify-center gap-8 items-center'>
      <Link data-testid="home-link" href="/" className='px-4 py-2 border rounded text-[#299d8f] border-[#299d8f] hover:bg-[#fff]'>
        Get Pokemon
      </Link>
      <Link data-testid="favorite-link" href="/favorite" className='px-4 py-2 border rounded text-[#299d8f] border-[#299d8f] hover:bg-[#fff]'>
        My Favorites List
      </Link>
    </nav>
  )
}

export default Navbar
