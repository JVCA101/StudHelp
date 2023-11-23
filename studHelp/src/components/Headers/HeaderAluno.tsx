import { useState } from "react";
import HeaderStyle from "../Models/HeaderStyle";
import { IoSettingsOutline } from "react-icons/io5";
import ProfileSettings from "../Models/ProfileSettings";
interface Props {
  open: boolean;
}

function HeaderAluno({ open }: Props) {
  const name: string = "Gabriel Oliveira Quaresma";
  const course: string = "Ciências da Computação";

  const [openSettings, setOpenSettings] = useState(false);

  return (
    <HeaderStyle>
      <div className="top-0 left-[90%] duration-300 absolute z-10 w-fit mt-4">
        <div
          className="hover:scale-105 cursor-pointer"
          onClick={() => setOpenSettings(!openSettings)}
          style={{ fontSize: "35px", color: "black" }}
        >
          <IoSettingsOutline />
        </div>
        <div className="mt-2 right-6 relative">
          <ProfileSettings open={openSettings} />
        </div>
      </div>
      <div
        className={`px-4  ${
          open ? "text-[2.2rem]" : "text-[2.5rem]"
        }  duration-1000 font-semibold font-roboto py-16 relative flex text-blue-900 `}
      >
        <h1 className=" text-blue-950">
          Aluno:{" "}
          <span
            className={`${
              open ? "text-[2.0rem]" : "text-[2.3rem]"
            } mr-4 text-blue-900`}
          >
            {name}
          </span>
          Curso:{" "}
          <span
            className={`${
              open ? " text-blue-900 text-[2.0rem]" : "text-[2.3rem]"
            }`}
          >
            {course}
          </span>
        </h1>
      </div>
    </HeaderStyle>
  );
}

export default HeaderAluno;
