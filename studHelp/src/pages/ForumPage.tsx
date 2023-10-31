import React from 'react'
import SideBar from '../components/SideBar'
import {useSideBarProps} from '../../props/SideBarProps.ts'

function ForumPage() {
  const {open, setOpen} = useSideBarProps();
  return (
      <div className="w-screen h-screen">
              <div className="absolute w-screen">
                  <SideBar open={open} setOpen={setOpen}/> 
              </div>
              <h1 className='flex justify-center items-center font-roboto relative top-1/2'>
                Serviços indisponíveis por enquanto
              </h1>
      </div>
  )
}

export default ForumPage