import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='text-gray-600 font-bold dark:text-white bg-gray-300 dark:bg-gray-800 body-font'>
      <div className="container px-4 py-24 mx-auto">
        <div className="flex flex-wrap order-first">
          <div className="lg:w-1/4 w-full px-4">
            <h2 className='mb-2 font-bold text-orange-500'>CATEGORIES</h2>
            <nav className='list-none mb-10'>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Order</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 w-full px-4">
            <h2 className='mb-2 font-bold text-orange-500'>CUSTOMER SERVICES</h2>
            <nav className='list-none mb-10'>
              <li>
                <a href="">Return Policy</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 w-full px-4">
            <h2 className='mb-2 font-bold text-orange-500'>SERVICES</h2>
            <nav className='list-none mb-10'>
              <li>
                <a href="">Privacy</a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 flex flex-wrap items-center justify-between px-4 lg:px-8 bg-black dark:bg-gray-950 ">
        <Link to={'/'}>
        <h1 className="font-bold py-4">UrbanHub</h1>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2025 UrbanHub —
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">www.urbanhub.com</a>
        </p>
        <div className="flex items-center space-x-6 ml-auto">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </div>
      </div>

    </footer>
  )
}

export default Footer
