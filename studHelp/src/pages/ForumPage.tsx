import React from 'react'
import SideBar from '../components/SideBar'

function ForumPage() {
  return (
      <div className="w-screen h-screen">
              <div className="absolute w-screen">
                  <SideBar /> 
              </div>
              <h1 className='flex justify-center items-center font-roboto relative top-1/2'>
                Serviços indisponíveis por enquanto
              </h1>
      </div>
  )
}

export default ForumPage