import React from 'react'
import SideBar from '../components/SideBar'
import HeaderAluno from '../components/HeaderAluno'
import BodyAlunoMaterias from '../components/BodyAlunoMaterias'
import BodyAlunoGrupos from '../components/BodyAlunoGrupos'
import BodyAlunoMateriasFeitas from '../components/BodyAlunoMateriasFeitas'


function StudentPage() {
  return (
    <div className="w-screen h-screen">
      <div className="absolute">
        <SideBar />
      </div>
      <div className={`h-screen w-[50%] left-[50%] md:left-[40%] md:w-[60%] min-[1200px]:left-[25%] absolute min-[1200px]:w-[75%] text-blue-950`}>
        <HeaderAluno />
        <div className='overflow-y-scroll px-8 h-[74%]'>
          <BodyAlunoMaterias />
          <BodyAlunoGrupos />
          <BodyAlunoMateriasFeitas />
        </div>
      </div>
    </div>
  )
}

export default StudentPage
