import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center justify-between px-15 py-6'>
            <div className='bg-black text-white px-3 py-2 uppercase font-semibold rounded-full'>
                <h4>target audience</h4>
            </div>
            <div className='bg-gray-200 text-black px-3 py-2 uppercase font-semibold rounded-full'>
                <button>digital banking platform</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
