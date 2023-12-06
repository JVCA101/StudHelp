// import { useEffect } from "react";
import { useState } from "react";
import { AppState } from "../../../props/state.ts";
import SideBarMobile from "../Models/SideBarMobile.tsx";
import SideBarModel from "../Models/SidebarModel.tsx";
import { useSelector } from "react-redux";
import About from "../Models/About.tsx";

const SideBar: React.FC = () => {
  const open = useSelector((state: AppState) => state.open); // Você deve tipar o state apropriadamente

  const [isAboutOpen, setIsPopupOpen] = useState(false);

  const openAbout = () => {
    setIsPopupOpen(true);
  };

  const closeAbout = () => {
    setIsPopupOpen(false);
  };

  const Menus = [
    { title: "Página do Aluno", src: "graduation 1", href: "/aluno" },
    { title: "Disciplinas", src: "book 1", href: "/disciplinas" },
    { title: "Grupos de Estudo", src: "reading-group 1", href: "/grupos" },
    { title: "Fórum", src: "chat 1", href: "/forum" },
  ];

  return (
    <div className="w-screen">
      <div className="w-screen">
        <SideBarModel
          open={open}
          textHead={"StudHelp"}
          subText={"sua plataforma de estudos"}
          subTextSize={"sm"}
          Menus={Menus}
        >
          <div
            className="flex w-full absolute p-10 gap-x-2 bottom-0 px-6 cursor-pointer opacity-50 hover:opacity-100 "
            onClick={openAbout}
          >
            <img
              src="./src/assets/about 1.svg"
              className={`scale-[1.3] duration-1000 ${
                open && "rotate-[360deg]"
              } ${!open && "scale-[0.69] py-2 relative left-[30%]"}`}
            />
            <h1
              className={`origin-left left-3 text-2xl px-3 opacity-70 ${
                !open && "hidden"
              }`}
            >
              Sobre
            </h1>
          </div>
          <About isOpen={isAboutOpen} onClose={closeAbout} />
        </SideBarModel>
      </div>
      <SideBarMobile Menus={Menus} />
    </div>
  );
};

export default SideBar;
