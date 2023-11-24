import SideBar from "../components/AuxComponents/SideBar";
import HeaderAluno from "../components/Headers/HeaderAluno";
import BodyAlunoMaterias from "../components/BodyPage/BodyAlunoMaterias";
import BodyAlunoGrupos from "../components/BodyPage/BodyAlunoGrupos";
import BodyAlunoMateriasFeitas from "../components/BodyPage/BodyAlunoMateriasFeitas";
import PageComponents from "../components/Models/PageComponents";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state";
import { ComponentStyle } from "../components/Models/ComponentStyle";
import BodyStyle from "../components/Models/BodyStyle";
import SideBarModel from "../components/Models/SidebarModel";

const StudentPage = () => {
  const open = useSelector((state: AppState) => state.open);

  document.title = "Página do Aluno - StudHelp";

  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="absolute">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <HeaderAluno open={open} />
        <BodyStyle>
          <ComponentStyle>
            <BodyAlunoMaterias />
          </ComponentStyle>
          <ComponentStyle>
            <BodyAlunoGrupos />
          </ComponentStyle>
          <ComponentStyle>
            <BodyAlunoMateriasFeitas />
          </ComponentStyle>
        </BodyStyle>
      </PageComponents>
    </div>
  );
};

export default StudentPage;
