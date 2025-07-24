import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4 flex flex-col">
        <li className="hover:text-green-400 cursor-pointer">Dashboard</li>
        <Link to="/addproduct" className="hover:text-green-400 cursor-pointer">Add Product</Link>
        <Link to="/updateproduct" className="hover:text-green-400 cursor-pointer">Update Product</Link>
        <li className="hover:text-green-400 cursor-pointer">Delete Product</li>
        <li className="hover:text-green-400 cursor-pointer">Orders</li>
        <li className="hover:text-green-400 cursor-pointer">Users</li>
      </ul>
    </div>
  )
}

export default Sidebar
