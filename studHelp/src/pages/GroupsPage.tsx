import SideBar from "../components/AuxComponents/SideBar";
import GroupsBody from "../components/BodyPage/GroupsBody";
import PageComponents from "../components/Models/PageComponents";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state";
import { ComponentStyle } from "../components/Headers/ComponentStyle";
import BodyStyle from "../components/Models/BodyStyle";
import GroupHeader from "../components/Headers/GroupsHeader";

const GroupsPage = () => {
  const open = useSelector((state: AppState) => state.open);

  document.title = "Grupos de Estudo - StudHelp";
  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="absolute w-screen">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <GroupHeader />
        <BodyStyle>
          <ComponentStyle>
            <GroupsBody open={open} />
          </ComponentStyle>
        </BodyStyle>
      </PageComponents>
    </div>
  );
};

export default GroupsPage;
