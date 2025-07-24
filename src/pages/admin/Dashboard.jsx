import React from 'react'
import Sidebar from '../../components/admin/Sidebar'
import Header from '../../components/admin/Header'
import StatsCard from '../../components/admin/StatsCard'

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard title="Total Products" value="120" />
          <StatsCard title="Total Orders" value="320" />
          <StatsCard title="Total Users" value="45" />
          <StatsCard title="Revenue" value="₹1,20,000" />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
