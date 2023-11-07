// import { useEffect } from "react";
import { AppState } from "../../../props/state.ts";
import SideBarModel from "../Models/SidebarModel.tsx";
import { useSelector } from "react-redux";

const SideBar: React.FC = () => {
  const open = useSelector((state: AppState) => state.open); // Você deve tipar o state apropriadamente

  const Menus = [
    { title: "Página do Aluno", src: "graduation 1", href: "/aluno" },
    { title: "Disciplinas", src: "book 1", href: "/disciplinas" },
    { title: "Grupos de Estudo", src: "reading-group 1", href: "/grupos" },
    { title: "Fórum", src: "chat 1", href: "/forum" },
  ];

  return (
    <SideBarModel
      open={open}
      textHead={"StudHelp"}
      subText={"sua plataforma de estudos"}
      subTextSize={"sm"}
      Menus={Menus}
    >
      <div className="flex absolute p-10 gap-x-2 bottom-0 px-6 cursor-pointer opacity-50 hover:opacity-100">
        <img
          src="./src/assets/about 1.svg"
          className={`scale-[1.3] duration-500 ${open && "rotate-[360deg]"} ${
            !open && "scale-[0.69] py-2 relative left-6"
          }`}
        />
        <h1
          className={`origin-left left-3 text-2xl px-3 opacity-70 ${
            !open && "hidden"
          }`}
        >
          Sobre
        </h1>
      </div>
    </SideBarModel>
  );
};

export default SideBar;
