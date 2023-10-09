import { useState } from "react";
//import React from "react";

function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Página do Aluno", src: "graduation 1" },
    { title: "Disciplinas", src: "book 1" },
    { title: "Grupos de Estudo", src: "reading-group 1" },
    { title: "Fórum", src: "chat 1" },
  ];
  return (

      <div
        className={`${
          open ? "w-1/5" : "w-28"
        } duration-300 h-screen bg-gradient-to-b from-blue-50  via-mid-bar to-blue-50 relative`}
      >
        <img
          src="./src/assets/right-arrow-angle 2.svg"
          className={`absolute cursor-pointer -right-2 w-10 top-2 ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-2">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-300 w-32 py-2
            } ${!open && "scale-[0.80] origin-left py-0"}`}
          />
          <h1
            className={`origin-left font-medium text-5xl left-3 duration-300 py-4 ${
              !open && "scale-0"
            }`}
          >
            StudHelp
            <h2 className="opacity-60 text-sm px-1 py-2">
              Sua plataforma de estudo
            </h2>
          </h1>
        </div>
        <ul className="pt-10">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-sm flex items-center gap-x-2 cursor-pointer p-2 hover:bg-purple-50 `}
            >
              <img
                className={`w-20 px-2  py-5 duration-500  ${
                  open && "rotate-[360deg]"
                } ${!open && "scale-[0.80]"}`}
                src={`./src/assets/${menu.src}.svg`}
              />

              <span
                className={`text-3xl font-medium origin-center ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-2 mt-48 px-6 cursor-pointer opacity-50 hover:opacity-100">
          <img
            src="./src/assets/about 1.svg"
            className={`scale-[1.3] duration-500 ${open && "rotate-[360deg]"} ${
              !open && "scale-[0.69] py-2 "
            } `}
          />
          <h1
            className={`origin-left font-ight left-3  text-2xl px-3 opacity-40 ${
              !open && "hidden"
            }`}
          >
            Sobre
          </h1>
        </div>
      </div>
  );
}

export default SideBar;
