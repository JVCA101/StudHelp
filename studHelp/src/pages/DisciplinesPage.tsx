import React from "react";
import SideBar from "../components/AuxComponents/SideBar";
import SearchDisciplinesHeader from "../components/AuxComponents/SearchDisciplinesHeader";
import DisciplinesBody from "../components/BodyPage/DisciplinesBody";
import DisciplesMaterials from "../components/BodyPage/DisciplesMaterials";
import PageComponents from "../components/Models/PageComponents";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state";

const DisciplinesPage = () => {
  const open = useSelector((state: AppState) => state.open);

  document.title = "Disciplinas - StudHelp";
  return (
    <div className="w-screen h-screen">
      <div className="absolute w-screen">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <SearchDisciplinesHeader />
        <div className="mt-8 overflow-y-scroll">
          <DisciplinesBody />
          <DisciplesMaterials />
        </div>
      </PageComponents>
    </div>
  );
};

export default DisciplinesPage;
