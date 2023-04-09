import { MobileMenu } from './'

import { useState } from 'react'
import { lock, logo, hamburgerMenu, close } from '../assets'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='md:max-w-[1480px] max-w-[600px] px-10 w-full h-full m-auto flex justify-between items-center'>
        <img src={logo} alt='brand' className='h-[25px] cursor-pointer' />

        <div className='hidden lg:flex items-center'>
          <ul className='flex gap-4'>
            <li className='cursor-pointer hover:text-gray-500'>Home</li>
            <li className='cursor-pointer hover:text-gray-500'>About</li>
            <li className='cursor-pointer hover:text-gray-500'>Support</li>
            <li className='cursor-pointer hover:text-gray-500'>Platform</li>
            <li className='cursor-pointer hover:text-gray-500'>Pricing</li>
          </ul>
        </div>

        {/* buttons in big screens */}
        <div className='hidden md:flex'>
          <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
            <img src={lock} alt='icon' />
            Login
          </button>
          <button className='bg-[#20b486] px-8 py-2 rounded-lg text-white font-bold hover:bg-[#20a186] duration-100 transition-colors'>
            Sign Up For Free
          </button>
        </div>

        {/* hamburger and close icon menu */}
        <div className='md:hidden w-5 cursor-pointer' onClick={handleToggle}>
          <img src={toggle ? close : hamburgerMenu} alt='nav icon' />
        </div>
      </div>

      {/* mobile menu */}
      <MobileMenu toggle={toggle} />
    </div>
  )
}

export default Navbar
