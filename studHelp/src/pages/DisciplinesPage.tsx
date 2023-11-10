import React from "react";
import SideBar from "../components/AuxComponents/SideBar";
import SearchDisciplinesHeader from "../components/AuxComponents/SearchDisciplinesHeader";
import DisciplinesBody from "../components/BodyPage/DisciplinesBody";
import DisciplesMaterials from "../components/BodyPage/DisciplesMaterials";
import PageComponents from "../components/Models/PageComponents";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state";
import { ComponentStyle } from "../components/Headers/ComponentStyle";

const DisciplinesPage = () => {
  const open = useSelector((state: AppState) => state.open);

  document.title = "Disciplinas - StudHelp";
  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="absolute w-screen">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <SearchDisciplinesHeader />
        <div className="overflow-y-scroll px-4 h-[80%]">
          <ComponentStyle>
            <DisciplinesBody />
          </ComponentStyle>
          <ComponentStyle>
            <DisciplesMaterials />
          </ComponentStyle>
        </div>
      </PageComponents>
    </div>
  );
};

export default DisciplinesPage;
