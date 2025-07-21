import React, { useContext, useState } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom'
import { BsFillCloudSunFill, BsFillMoonFill } from 'react-icons/bs'
import { FiMenu, FiSearch, FiSun, FiX } from 'react-icons/fi'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const context = useContext(myContext)
  const { mode,setMode} = context
  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="relative bg-white">
        <nav
          className="bg-black dark:bg-gray-900 shadow-xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="dark:text-orange-400 text-2xl font-bold text-white px-2 py-1">
              UrbanHub
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-6 ml-auto">
              <Link to="/allproducts" className="dark:text-gray-400 dark:hover:text-orange-400 text-sm text-white transition-colors duration-300 hover:text-orange-500">All Products</Link>
              <Link to="/order" className="dark:text-gray-400 text-sm dark:hover:text-orange-400 text-white transition-colors duration-300 hover:text-orange-500">Order</Link>
              <Link to="/dashboard" className="dark:text-gray-400 text-sm dark:hover:text-orange-400 text-white transition-colors duration-300 hover:text-orange-500">Admin</Link>
              <a className="dark:text-gray-400 text-sm text-white dark:hover:text-orange-400 cursor-pointer transition-colors duration-300 hover:text-orange-500">Logout</a>

              <div className='relative'>
                <input type="text"
                  placeholder='Search products....'
                  className='px-3 py-1 rounded-md text-sm bg-white text-black w-40 dark:bg-gray-800 dark:text-white'
                />
                <FiSearch className='absolute  right-2 top-2 text-gray-500' />
              </div>


              <Link to="/cart" className="flex items-center space-x-1 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span className="text-sm font-medium">0</span>
              </Link>

              <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className="text-orange-400 hover:text-orange-500 transition duration-300"
              >
                {mode === 'light' ? <BsFillMoonFill size={22} /> : <FiSun size={22} />}
              </button>

            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="text-white">
                <FiMenu size={26} />
              </button>
            </div>
          </div>

          {/* Slide-in Menu from Right */}
          <div
            className={`
    fixed top-0 right-0 h-full w-64 bg-black z-50 bg-opacity-80
    transform transition-transform duration-300 ease-in-out
    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
          >

            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white z-60"
            >
              <FiX size={26} />
            </button>

            {/* Menu Items */}
            <div className="flex flex-col items-start p-6 space-y-6 mt-12">
              <div className='w-full  relative'>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full top-4 px-7 py-3 rounded-md text-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <FiSearch className='absolute left-1 top-3' />
              </div>
              <Link to="/allproducts" className="text-white border-b w-full">All Products</Link>
              <Link to="/order" className="text-white border-b w-full">Order</Link>
              <Link to="/dashboard" className="text-white border-b w-full">Admin</Link>
              <a className="text-white cursor-pointer border-b w-full">Logout</a>

              <Link to="/cart" className="flex items-center text-white space-x-1 border-b w-full">
                <span>Cart</span>
                <span className="text-sm font-medium">(0)</span>
              </Link>

              <button
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                className="text-white hover:text-orange-500 transition duration-300 border-b w-full flex items-center"
              >
              {mode === 'light' ? <BsFillMoonFill size={22} /> : <FiSun size={22} />} Change theme
              </button>

            </div>
          </div>

          {/* Optional: Backdrop overlay when menu is open */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

        </nav>
      </header>
    </div>

  )
}

export default Navbar
