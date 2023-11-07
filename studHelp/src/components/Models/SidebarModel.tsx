import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../../store";
import { Link } from "react-router-dom";

interface SideBarModelProps {
  open: boolean;
  children: React.ReactNode;
  textHead: string;
  subText: string;
  subTextSize: string; // Propriedade para o tamanho da fonte
  Menus: { title: string; src: string; href: string }[];
}

export const SideBarModel = ({
  open,
  children,
  textHead,
  subText,
  subTextSize,
  Menus,
}: SideBarModelProps) => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  // Mapeia valores de tamanho de fonte personalizados para classes Tailwind
  const fontSizeClass =
    subTextSize === "small"
      ? "text-sm"
      : subTextSize === "medium"
      ? "text-md"
      : "text-base";

  return (
    <div className="flex select-none text-blue-950 font-roboto">
      <div
        className={`${
          open ? "w-[100%] md:w-[40%] min-[1200px]:w-[25%]" : "w-[10%]"
        } duration-1000 h-screen bg-gradient-to-b from-blue-400  via-blue-500  to-blue-200 relative`}
      >
        <img
          src="./src/assets/right-arrow-angle 2.svg"
          className={`absolute cursor-pointer -right-2 w-10 top-0 ${
            open && "rotate-180"
          }`}
          onClick={handleToggleSidebar}
        />
        <div className="flex gap-x-2">
          <img
            src="./src/assets/logo.png"
            className={`duration-500 w-32 py-2 px-1 ${
              !open && "scale-[0.8] left-3 relative w-24 origin-left mt-10"
            }`}
          />
          <h1
            className={`origin-left font-medium max-sm:text-[0rem] sm:text-[2.50rem] left-3 duration-1000 py-4 ${
              !open && "hidden"
            }`}
          >
            {textHead}
            <h2
              className={`opacity-100 max-sm:text-[0rem] ${fontSizeClass} px-1 py-2`}
            >
              {subText}
            </h2>
          </h1>
        </div>
        <div
          className={`w-screen h-[1px] bg-black opacity-20 ${
            open ? "mt-7" : "-mt-3"
          } duration-1000`}
        ></div>
        <ul className="">
          {Menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.href}>
                <div className="text-sm flex cursor-pointer p-2 hover:bg-purple-50 ">
                  <img
                    src="./src/assets/right-arrow-angle 2.svg"
                    className={`duration-1000 ${!open && "hidden"}`}
                  />
                  <img
                    className={`w-16 scale-75 px-2 py-4 duration-1000 ${
                      open && "rotate-[360deg]"
                    } ${!open && "scale-[1.0] left-6 relative"}`}
                    src={`./src/assets/${menu.src}.svg`}
                  />

                  <span
                    className={`max-sm:text-[1.5rem] text-[1.7rem] mt-[29px] font-medium origin-center duration-1000 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </div>
  );
};

export default SideBarModel;
