import React from 'react'
import SideBar from '../components/SideBar'
import SearchDisciplinesHeader from '../components/SearchDisciplinesHeader'

function DisciplinesPage() {
  return(
        <div className="w-screen h-screen">
                <div className="absolute w-screen">
                    <SideBar /> 
                </div>
                <div className = {`w-[50%] left-[50%] md:left-[40%] md:w-[60%] min-[1200px]:left-[25%] absolute min-[1200px]:w-[75%]`}>
                <SearchDisciplinesHeader />
              </div>  
        </div>

  )
}

export default DisciplinesPage