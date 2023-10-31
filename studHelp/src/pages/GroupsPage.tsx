import React from 'react'
import SideBar from '../components/SideBar'
import SearchDisciplinesHeader from '../components/SearchDisciplinesHeader'
import CreateGroup from '../components/CreateGroup'
import GroupsBody from '../components/GroupsBody'
import {useSideBarProps} from '../../props/SideBarProps.ts'

const GroupsPage = () => {
  const {open, setOpen} = useSideBarProps();
  document.title = "Grupos de Estudo - StudHelp";
  return (
    <div className="w-screen h-screen">
            <div className="absolute">
                <SideBar open={open} setOpen={setOpen}/> 
            </div>
            <div className = {`h-screen absolute text-blue-950 duration-1000
      ${open ? " w-[50%] left-[50%] md:left-[40%] md:w-[60%] min-[1200px]:left-[25%]  min-[1200px]:w-[75%]": "w-[90%] left-[10%]" }`}>                        
              <div className='flex w-full'>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4">
                  <SearchDisciplinesHeader />
                </div>
                <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/4">
                  <CreateGroup />
                </div>
              </div>
              
              <div className='h-[70%]'>
              <GroupsBody /> 
              </div>
                                          
            </div>          
    </div>
  )
}

export default GroupsPage