import SideBar from "../components/AuxComponents/SideBar";
import GroupsBody from "../components/BodyPage/GroupsBody";
import PageComponents from "../components/Models/PageComponents";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state";
import { ComponentStyle } from "../components/Headers/ComponentStyle";
import BodyStyle from "../components/Models/BodyStyle";
import GroupHeader from "../components/Headers/GroupsHeader";
import { useState } from "react";

const GroupsPage = () => {
  const open = useSelector((state: AppState) => state.open);

  const [inputContent, setInputContent] = useState("");

  document.title = "Grupos de Estudo - StudHelp";
  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="absolute w-screen">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <GroupHeader
          setInputContent={setInputContent}
          inputContent={inputContent}
        />
        <BodyStyle>
          <ComponentStyle>
            <GroupsBody open={open} inputContent={inputContent} />
          </ComponentStyle>
        </BodyStyle>
      </PageComponents>
    </div>
  );
};

export default GroupsPage;
