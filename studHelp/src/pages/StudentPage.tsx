import React from 'react'
import SideBar from '../components/SideBar'
import HeaderAluno from '../components/HeaderAluno'
import BodyAlunoMaterias from '../components/BodyAlunoMaterias'
import BodyAlunoGrupos from '../components/BodyAlunoGrupos'
import BodyAlunoMateriasFeitas from '../components/BodyAlunoMateriasFeitas'
import {useSideBarProps} from '../../props/SideBarProps.ts'


const StudentPage = () => {

  const {open, setOpen} = useSideBarProps();
  return (
    <div className="w-screen h-screen">
      <title>Aluno  </title>
      <div className="absolute">
        <SideBar open={open} setOpen={setOpen} />
      </div>
      <div className={`h-screen absolute text-blue-950 duration-1000
      ${open ? " w-[50%] left-[50%] md:left-[40%] md:w-[60%] min-[1200px]:left-[25%]  min-[1200px]:w-[75%]": "w-[90%] left-[10%]" }`}>
        <HeaderAluno />
        <div className={`overflow-y-scroll px-8 h-[74%] mt-1`}>
          <BodyAlunoMaterias />
          <BodyAlunoGrupos />
          <BodyAlunoMateriasFeitas />
        </div>
      </div>
    </div>
  )
}

export default StudentPage
