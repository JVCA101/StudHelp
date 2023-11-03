import React from 'react'
import SideBar from '../components/SideBar'

import PageComponents from '../components/PageComponents.tsx';
import { useSelector } from 'react-redux';
import { AppState } from '../../state';



function ForumPage() {
  
const open = useSelector((state: AppState) => state.open);

  document.title = "Fórum - StudHelp";
  return (
      <div className="w-screen h-screen">
              <div className="absolute w-screen">
                  <SideBar /> 
              </div>
              <PageComponents open={open}>
                <h1 className='flex justify-center items-center font-roboto relative top-1/2'>
                  Serviços indisponíveis por enquanto
                </h1>
              </PageComponents>
              
      </div>
  )
}

export default ForumPage