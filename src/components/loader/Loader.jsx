import React from 'react'

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      {/* Logo Pulse */}
      <div className="text-4xl font-bold text-white animate-pulse mb-6">
        UrbanHub
      </div>

      {/* Bouncing Dots */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}

export default Loader
