import SideBar from "../components/AuxComponents/SideBar.tsx";

import PageComponents from "../components/Models/PageComponents.tsx";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state.ts";

function ForumPage() {
  const open = useSelector((state: AppState) => state.open);

  document.title = "Fórum - StudHelp";
  return (
    <div className="w-screen h-screen">
      <div className="absolute w-screen">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <div className="flex justify-center items-center font-roboto relative top-1/2">
          Serviços indisponíveis por enquanto
        </div>
      </PageComponents>
    </div>
  );
}

export default ForumPage;
