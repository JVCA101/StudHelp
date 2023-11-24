import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  Menus: { title: string; src: string; href: string }[];
}

export const MobileSideBar = ({ Menus }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen max-w-[120px] max-h-[240px] md:hidden">
      <div className="md:hidden absolute z-50 rounded-full m-6 p-3 bottom-0 left-0 bg-blue-400">
        <img
          className="w-14 cursor-pointer"
          src="./src/assets/logo.png"
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul className="md:hidden absolute z-50 bottom-[12%] ml-5 left-0 p-3">
        {Menus.map((menu, index) => (
          <li key={index} className=" ">
            <Link to={menu.href}>
              <div
                className={`flex gap-x-10 duration-500 transform ${
                  open ? "" : " translate-y-96 opacity-0   pointer-events-none"
                } `}
              >
                <div
                  className={`flex gap-x-10  ${
                    !open && " duration-1000 hidden"
                  } `}
                >
                  <img
                    className="w-16 scale-110 mb-8 border origin-center border-black shadow-lg border-opacity-50 bg-blue-400 rounded-full"
                    src={`./src/assets/${menu.src}.svg`}
                  />
                  <span className="text-3xl py-3 origin-center text-blue-950 h-fit">
                    <strong>{menu.title}</strong>
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`md:hidden fixed inset-0 z-40 backdrop-blur-lg transition-opacity  ${
          open ? "bg-white opacity-[85%]" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </div>
  );
};

export default MobileSideBar;
