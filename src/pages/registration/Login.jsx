import React from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Layout>
      <div className='container h-screen w-full mx-auto px-5 flex items-center justify-center'>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg w-full md:w-1/2 lg:w-1/3 p-8 shadow-md flex flex-col items-center justify-center max-w-[360px] mx-auto my-12">
          <h1 className="mb-6 text-xl font-bold text-black dark:text-white">Login to Hoodiehub</h1>



          <input
            type="email"
            placeholder='Email'
            className='w-full mb-4 px-5 py-3 rounded-md text-sm bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400'
          />


          <input
            type="password"
            placeholder='Password'
            className='w-full mb-6 px-5 py-3 rounded-md text-sm bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400'
          />


          <button className='w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition duration-300'>Login</button>

          <h2 className='mt-3 dark:text-white'>New User? Register <Link to={'/signup'} className='text-orange-600 font-bold'>here</Link></h2>
        </div>
      </div>
    </Layout>
  )
}

export default Login
