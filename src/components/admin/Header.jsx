import React from 'react'

function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="text-sm text-gray-600">Welcome, Admin</div>
    </header>
  )
}

export default Header
