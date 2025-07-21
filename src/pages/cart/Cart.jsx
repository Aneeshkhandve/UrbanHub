import React from 'react'
import Layout from '../../components/layout/Layout'

export default function Cart() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white px-4 py-10">
        <h1 className="font-bold text-3xl text-center py-2 mb-10">Cart Items</h1>

        <div className="flex flex-col lg:flex-row mx-auto  max-w-6xl gap-6 px-4">
          <div className="rounded-lg shadow-xl bg-white w-full p-6 lg:w-2/3 dark:bg-gray-800">
            <div className="flex flex-col sm:flex-row gap-4">
              <img src="https://dummyimage.com/400x400" alt="product-image" className="w-full rounded-lg sm:w-40" />
              <div className="flex flex-col p-2">
              <h2 className="font-bold text-lg">This is title</h2>
              <h2 className="text-gray-600 text-sm mb-1">Desc</h2>
              <p className='font-semibold text-orange-600 text-lg'>50$</p>
              </div>
            </div>
          </div>

          <div className=" bg-white shadow-xl  dark:bg-gray-800 lg:w-1/3 w-full rounded-lg p-6 flex flex-col justify-between">
            <div className='space-y-4 '>
              <div className="flex justify-between">
                <p className="text-gray-700 dark:text-gray-400 font-medium">Subtotal</p>
                <p className="font-semibold">$50</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 dark:text-gray-400 font-medium">Subtotal</p>
                <p className="font-semibold">$50</p>
              </div>
              <hr />
              <div className='flex justify-between text-lg font-bold'>
                <p>Total</p>
                <p>60$</p>
              </div>
            </div>
              
            <button className="w-fill mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 font-semibold rounded-lg">Buy now</button>
            
            
          </div>
        </div>
      </div>
    </Layout>
  )
}
