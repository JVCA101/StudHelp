import React from 'react'
import SideBar from '../components/SideBar'
import SearchDisciplinesHeader from '../components/SearchDisciplinesHeader'
import DisciplinesBody from '../components/DisciplinesBody'
import DisciplesMaterials from '../components/DisciplesMaterials'
import PageComponents from '../components/PageComponents'
import { useSelector } from 'react-redux';
import { AppState } from '../../state';

const DisciplinesPage = () => {
  const open = useSelector((state: AppState) => state.open);

  document.title = "Disciplinas - StudHelp";
  return(
        <div className="w-screen h-screen">
                <div className="absolute w-screen">
                    <SideBar /> 
                </div>
                <PageComponents open={open} >
                  <SearchDisciplinesHeader />
                  <div className='mt-8 overflow-y-scroll'>
                  <DisciplinesBody />
                  <DisciplesMaterials />
                  </div>
                </PageComponents>
                
        </div>

  )
}

export default DisciplinesPage