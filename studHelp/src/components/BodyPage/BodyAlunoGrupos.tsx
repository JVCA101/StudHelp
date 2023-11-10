import GroupsStyle from "../Models/GroupsStyle";

function BodyAlunoGrupos() {
  const Groups = [
    {
      disciplina: "Cálculo 1",
      code: "MAT001",
      dia: "Segunda",
      hora: "08:00",
      local: "Sala 1",
      adm: "João",
    },
    {
      disciplina: "Cálculo 2",
      code: "MAT002",
      dia: "Terça",
      hora: "08:00",
      local: "Sala 2",
      adm: "João",
    },
    {
      disciplina: "Cálculo 3",
      code: "MAT003",
      dia: "Quarta",
      hora: "08:00",
      local: "Sala 3",
      adm: "João",
    },
  ];

  return (
    <div className="h-auto text-blue-900">
      <div>
        <h1 className="mt-10 text-[1.8rem] font-roboto  font-medium">
          Meus Grupos:
        </h1>
      </div>
      <div className="overflow-x-scroll flex gap-x-28 py-5">
        {Groups.map((group, index) => (
          <div key={index} className="flex">
            <GroupsStyle
              disciplina={group.disciplina}
              code={group.code}
              dia={group.dia}
              hora={group.hora}
              local={group.local}
              adm={group.adm}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodyAlunoGrupos;
