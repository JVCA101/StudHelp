import React from 'react'
import SideBar from '../components/SideBar'
import SearchDisciplinesHeader from '../components/SearchDisciplinesHeader'
import DisciplinesBody from '../components/DisciplinesBody'
import DisciplesMaterials from '../components/DisciplesMaterials'
import {useSideBarProps} from '../../props/SideBarProps.ts'

const DisciplinesPage = () => {
  const {open, setOpen} = useSideBarProps();
  return(
        <div className="w-screen h-screen">
                <div className="absolute w-screen">
                    <SideBar open={open} setOpen={setOpen}/> 
                </div>
                <div className = {`h-screen absolute text-blue-950 duration-1000
      ${open ? " w-[50%] left-[50%] md:left-[40%] md:w-[60%] min-[1200px]:left-[25%]  min-[1200px]:w-[75%]": "w-[92%] left-[96px]" }`}>
                <SearchDisciplinesHeader />
                <div className='mt-8 overflow-y-scroll'>
                <DisciplinesBody />
                <DisciplesMaterials />
                </div>
              </div>  
        </div>

  )
}

export default DisciplinesPage