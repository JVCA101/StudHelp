import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../store.ts';
import {AppState} from '../../state.ts';

const SideBar: React.FC = () => {
  const open = useSelector((state: AppState) => state.open); // Você deve tipar o state apropriadamente
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const Menus = [
    { title: 'Página do Aluno', src: 'graduation 1', href: '/aluno' },
    { title: 'Disciplinas', src: 'book 1', href: '/disciplinas' },
    { title: 'Grupos de Estudo', src: 'reading-group 1', href: '/grupos' },
    { title: 'Fórum', src: 'chat 1', href: '/forum' },
  ];

  useEffect(() => {
    const handleResize = () => {
      dispatch(toggleSidebar());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <div className="flex select-none">
      <div
        className={`${
          open ? 'w-[100%] md:w-[40%] min-[1200px]:w-[25%]' : 'w-[10%]'
        } duration-1000 h-screen bg-gradient-to-b from-blue-400  via-blue-500  to-blue-200 relative`}
      >
        <img
          src="./src/assets/right-arrow-angle 2.svg"
          className={`absolute cursor-pointer -right-2 w-10 top-0 ${
            open && 'rotate-180'
          }`}
          onClick={handleToggleSidebar}
        />
        <div className="flex gap-x-2">
          <img
            src="./src/assets/logo.png"
            className={`duration-500 w-32 py-2 px-1 ${
              !open && 'scale-[0.8] left-3 relative w-24 origin-left mt-10'
            }`}
          />
          <h1
            className={`origin-left font-medium max-sm:text-[0rem] sm:text-[2.50rem] left-3 duration-1000 py-4 ${
              !open && 'scale-0'
            }`}
          >
            StudHelp
            <h2 className="opacity-60 max-sm:text-[0rem] text-sm px-1 py-2">
              Sua plataforma de estudo
            </h2>
          </h1>
        </div>
        <div
          className={`w-screen h-[1px] bg-black opacity-20 ${
            open ? 'mt-7' : '-mt-3'
          } duration-1000`}
        ></div>
        <ul className="">
          {Menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.href}>
                <div className="text-sm flex cursor-pointer p-2 hover:bg-purple-50 ">
                  <img src="./src/assets/right-arrow-angle 2.svg" className={`duration-1000 ${!open && 'hidden'}`} />
                  <img
                    className={`w-16 scale-75 px-2 py-4 duration-1000 ${open && 'rotate-[360deg]'} ${
                      !open && 'scale-[1.0] left-6 relative'
                    }`}
                    src={`./src/assets/${menu.src}.svg`}
                  />

                  <span
                    className={`max-sm:text-[1.5rem] text-[1.7rem] mt-[29px] font-medium origin-center duration-1000 ${
                      !open && 'hidden'
                    }`}
                  >
                    {menu.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex absolute p-10 gap-x-2 bottom-0 px-6 cursor-pointer opacity-50 hover:opacity-100">
          <img
            src="./src/assets/about 1.svg"
            className={`scale-[1.3] duration-500 ${open && 'rotate-[360deg]'} ${
              !open && 'scale-[0.69] py-2 relative left-6'
            }`}
          />
          <h1
            className={`origin-left font-ight left-3 text-2xl px-3 opacity-70 ${
              !open && 'hidden'
            }`}
          >
            Sobre
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
