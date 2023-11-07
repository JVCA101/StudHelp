import SideBar from "../components/AuxComponents/SideBar";
import HeaderAluno from "../components/Headers/HeaderAluno";
import BodyAlunoMaterias from "../components/BodyPage/BodyAlunoMaterias";
import BodyAlunoGrupos from "../components/BodyPage/BodyAlunoGrupos";
import BodyAlunoMateriasFeitas from "../components/BodyPage/BodyAlunoMateriasFeitas";
import PageComponents from "../components/Models/PageComponents";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state";

const StudentPage = () => {
  const open = useSelector((state: AppState) => state.open);

  document.title = "Página do Aluno - StudHelp";
  return (
    <div className="w-screen h-screen">
      <title>Aluno </title>
      <div className="absolute">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <HeaderAluno open={open} />
        <div className={`overflow-y-scroll px-8 h-[80%] mt-1`}>
          <BodyAlunoMaterias />
          <BodyAlunoGrupos />
          <BodyAlunoMateriasFeitas />
        </div>
      </PageComponents>
    </div>
  );
};

export default StudentPage;
