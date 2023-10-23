import { useEffect, useState } from "react";
import React from 'react';

function SideBar() {
  
    const [open, setOpen] = useState(true);

    const handleClick = (href: string) => {
      window.location.href = href;
    };

    const Menus = [
        { title: "Página do Aluno", src: "graduation 1", href: "aluno" },
        { title: "Disciplinas", src: "book 1", href: "disciplinas" },
        { title: "Grupos de Estudo", src: "reading-group 1", href: "grupos" },
        { title: "Fórum", src: "chat 1", href: "forum" },
    ];

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth > 500);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const setPageTitle = (href: string) => {
      // Define the title based on the href
      switch (href) {
          case "aluno":
              document.title = "Página do Aluno - StudHelp";
              break;
          case "disciplinas":
              document.title = "Disciplinas - StudHelp";
              break;
          case "grupos":
              document.title = "Grupos de Estudo - StudHelp";
              break;
          case "forum":
              document.title = "Fórum - StudHelp";
              break;
          default:
              document.title = "StudHelp";
      }
  };

    return (
        <div className="flex select-none">
            <div
                className={`${
                    open ? "w-1/2 md:w-[40%] min-[1200px]:w-[25%]" : "w-[96px]"
                } duration-1000 h-screen bg-gradient-to-b from-teal-100 via-teal-200 to-teal-50 relative`}
            >
                <img
                    src="./src/assets/right-arrow-angle 2.svg"
                    className={`absolute cursor-pointer -right-2 w-10 top-0 ${
                        open && "rotate-180"
                    }`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-2">
                    <img
                        src="./src/assets/logo.png"
                        className={`duration-500 w-32 py-2 px-1 
            } ${!open && "scale-[1] w-24 origin-left mt-10"}`}
                    />
                    <h1
                        className={`origin-left font-medium  max-sm:text-[0rem] sm:text-[2.50rem] left-3 duration-300 py-4 ${
                            !open && "scale-0"
                        }`}
                    >
                        StudHelp
                        <h2 className="opacity-60  max-sm:text-[0rem] text-sm px-1 py-2">
                            Sua plataforma de estudo
                        </h2>
                    </h1>
                </div>
                <div
                    className={`w-screen h-[1px] mt-7 bg-black opacity-20 ${!open && "mt-4"} `}
                ></div>
                <ul className="">
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`text-sm flex cursor-pointer p-2 hover:bg-purple-50 `}
                            onClick={() => {handleClick(menu.href)
                                            setPageTitle(menu.href);} 
                                          }
                        >
                            <img src="./src/assets/right-arrow-angle 2.svg" className={` duration-1000 ${!open && "hidden"}`} />
                            <img
                                className={`w-16 scale-75 px-2  py-4 duration-1000  ${
                                    open && "rotate-[360deg]"
                                } ${!open && "scale-[1.0]"}`}
                                src={`./src/assets/${menu.src}.svg`}
                            />

                            <span
                                className={` max-sm:text-[1.5rem] text-[1.7rem] mt-[29px] font-medium origin-center duration-1000 ${
                                    !open && "hidden"
                                }`}
                            >
                                {menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
               
                <div className="flex absolute p-10 gap-x-2 bottom-0 px-6 cursor-pointer opacity-50 hover:opacity-100">
                    <img
                        src="./src/assets/about 1.svg"
                        className={`scale-[1.3] duration-500 ${open && "rotate-[360deg]"} ${
                            !open && "scale-[0.69] py-2 "
                        }`}
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
        </div>
    );
}

export default SideBar;
