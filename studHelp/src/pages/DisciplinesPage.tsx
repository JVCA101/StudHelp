import SideBar from "../components/AuxComponents/SideBar";
import DisciplinesBody from "../components/BodyPage/DisciplinesBody";
import DisciplesMaterials from "../components/BodyPage/DisciplesMaterials";
import PageComponents from "../components/Models/PageComponents";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state";
import { ComponentStyle } from "../components/Models/ComponentStyle";
import DisciplinesHeader from "../components/Headers/DisciplinesHeader";
import BodyStyle from "../components/Models/BodyStyle";
import { useState } from "react";
import { Disciplina } from "../../props/data";

const DisciplinesPage = () => {
  const open = useSelector((state: AppState) => state.open);
  const [inputContent, setInputContent] = useState("");

  const disciplina: Disciplina = null;

  document.title = "Disciplinas - StudHelp";
  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="absolute w-screen">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <DisciplinesHeader
          setInputContent={setInputContent}
          inputContent={inputContent}
        />
        {disciplina === null ? (
          <BodyStyle>
            <ComponentStyle>
              <h1 className="font-roboto text-center text-2xl">
                Insira código de disciplina para exibir informações.
              </h1>
            </ComponentStyle>
          </BodyStyle>
        ) : (
          <BodyStyle>
            <ComponentStyle>
              <DisciplinesBody />
            </ComponentStyle>
            <ComponentStyle>
              <DisciplesMaterials />
            </ComponentStyle>
          </BodyStyle>
        )}
      </PageComponents>
    </div>
  );
};

export default DisciplinesPage;
