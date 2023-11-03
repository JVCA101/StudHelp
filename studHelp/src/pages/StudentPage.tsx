import SideBar from '../components/SideBar'
import HeaderAluno from '../components/HeaderAluno'
import BodyAlunoMaterias from '../components/BodyAlunoMaterias'
import BodyAlunoGrupos from '../components/BodyAlunoGrupos'
import BodyAlunoMateriasFeitas from '../components/BodyAlunoMateriasFeitas'
import PageComponents from '../components/PageComponents'
import { useSelector } from 'react-redux';
import { AppState } from '../../props/state';

const StudentPage = () => {

  const open = useSelector((state: AppState) => state.open);
  
  document.title = "Página do Aluno - StudHelp";
  return (
   

    <div className="w-screen h-screen">
      <title>Aluno  </title>
      <div className="absolute">
        <SideBar />
      </div>
      <PageComponents open={open} >
        <HeaderAluno />
        <div className={`overflow-y-scroll px-8 h-[74%] mt-1`}>
          <BodyAlunoMaterias />
          <BodyAlunoGrupos />
          <BodyAlunoMateriasFeitas />
        </div>
      </PageComponents>
    </div>
  )
}

export default StudentPage
