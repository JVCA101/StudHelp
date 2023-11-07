import SideBar from "../components/AuxComponents/SideBar";
import SearchDisciplinesHeader from "../components/AuxComponents/SearchDisciplinesHeader";
import CreateGroup from "../components/AuxComponents/CreateGroup";
import GroupsBody from "../components/BodyPage/GroupsBody";
import PageComponents from "../components/Models/PageComponents";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state";

const GroupsPage = () => {
  const open = useSelector((state: AppState) => state.open);

  document.title = "Grupos de Estudo - StudHelp";
  return (
    <div className="w-screen h-screen">
      <div className="absolute">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <div className="flex w-full">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4">
            <SearchDisciplinesHeader />
          </div>
          <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/4">
            <CreateGroup />
          </div>
        </div>

        <div className="h-[70%]">
          <GroupsBody open={open} />
        </div>
      </PageComponents>
    </div>
  );
};

export default GroupsPage;
