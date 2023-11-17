interface GroupsStyleProps {
  disciplina: string;
  code: string;
  dia: string;
  hora: string;
  local: string;
  adm: string;
}
import { MdManageAccounts } from "react-icons/md";
import ManageGroup from "./ManageGroup";
import { useState } from "react";

export const GroupsStyle = ({
  disciplina,
  code,
  dia,
  hora,
  local,
  adm,
}: GroupsStyleProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-52 hover:bg-blue-700 transition-colors duration-300 rounded-[50px] mt-7 w-72 bg-blue-900 text-[1.2rem] text-white">
      <div className="w-full flex flex-col absolute">
        <div
          className="hover:scale-150 duration-300 mt-4 ml-auto p-2 cursor-pointer z-10"
          style={{ fontSize: "30px" }}
          onClick={() => setOpen(!open)}
        >
          <MdManageAccounts />
        </div>
        <div className="w-fit left-[85%] relative">
          <ManageGroup open={open} isAdmin={true} />
        </div>
      </div>

      <div>
        <h1 className="flex justify-center items-center relative py-2">
          Disciplina: {disciplina} <br />
          Código: {code}
        </h1>
        <p className="px-5 ">
          Dia: {dia}
          <br />
          Horário: {hora} <br />
          Local: {local} <br />
          Admin: {adm} <br />
        </p>
      </div>
    </div>
  );
};

export default GroupsStyle;
