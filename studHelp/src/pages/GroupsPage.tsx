import React from 'react'
import SideBar from '../components/SideBar'
import SearchDisciplinesHeader from '../components/SearchDisciplinesHeader'
import CreateGroup from '../components/CreateGroup'
import GroupsBody from '../components/GroupsBody'

function GroupsPage() {
  return (
    <div className="w-screen h-screen">
            <div className="absolute w-screen">
                <SideBar /> 
            </div>
            <div className = {`w-[50%] left-[50%] md:left-[40%] md:w-[60%] min-[1200px]:left-[25%] absolute min-[1200px]:w-[75%] `}>                        
              <div className='flex w-full'>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4">
                  <SearchDisciplinesHeader />
                </div>
                <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/4">
                  <CreateGroup />
                </div>
              </div>
              <GroupsBody />                             
            </div>          
    </div>
  )
}

export default GroupsPage