interface GroupsStyleProps {
  disciplina: string;
  code: string;
  dia: string;
  hora: string;
  local: string;
  adm: string;
}

export const GroupsStyle = ({
  disciplina,
  code,
  dia,
  hora,
  local,
  adm,
}: GroupsStyleProps) => {
  return (
    <div className="h-52 rounded-[50px] mt-7 w-72 bg-blue-900 text-[1.2rem] text-white">
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
