import GroupsRequestStyle from "../Models/GroupsRequestStyle";

interface Props {
  open: boolean;
  inputContent: string;
}

function GroupsBody({ open, inputContent }: Props) {
  const Groups = [
    {
      disciplineCode: "DCC123",
      adm: "João",
      currentMembers: ["João", "Maria"],
      totalMembers: 5,
      day: "Segunda",
      time: "08:00",
      local: "Sala 4",
    },
    {
      disciplineCode: "MAT103",
      adm: "João",
      currentMembers: ["João", "Maria"],
      totalMembers: 5,
      day: "Segunda",
      time: "08:00",
      local: "Sala 4",
    },
    {
      disciplineCode: "FIS105",
      adm: "João",
      currentMembers: ["João", "Maria"],
      totalMembers: 5,
      day: "Segunda",
      time: "08:00",
      local: "Sala 4",
    },
    {
      disciplineCode: "DCC001",
      adm: "João",
      currentMembers: ["João", "Maria"],
      totalMembers: 5,
      day: "Segunda",
      time: "08:00",
      local: "Sala 4",
    },
    {
      disciplineCode: "DCC002",
      adm: "João",
      currentMembers: ["João", "Maria"],
      totalMembers: 5,
      day: "Segunda",
      time: "08:00",
      local: "Sala 4",
    },
  ];

  const filteredGroups =
    inputContent.length > 0
      ? Groups.filter((group) =>
          group.disciplineCode.includes(inputContent.toLocaleUpperCase())
        )
      : [];

  return (
    <div className="relative font-roboto h-full">
      <div>
        <h1 className="text-4xl font-roboto px-4">Grupo da Disciplina:</h1>
      </div>
      <div className="relative h-full mt-10 ">
        <div className="flex-wrap flex gap-y-20">
          {inputContent.length === 0 ? (
            Groups.map((group, index) => (
              <div key={index} className="flex">
                <GroupsRequestStyle
                  adm={group.adm}
                  currentMembers={group.currentMembers}
                  totalMembers={group.totalMembers}
                  day={group.day}
                  time={group.time}
                  local={group.local}
                  open={open}
                  disciplineCode={group.disciplineCode}
                />
              </div>
            ))
          ) : filteredGroups.length === 0 ? (
            <div>
              <h1 className="text-2xl font-roboto px-4">
                Nenhum grupo encontrado
              </h1>
            </div>
          ) : (
            filteredGroups.map((filteredGroups, index) => (
              <div key={index} className="flex">
                <GroupsRequestStyle
                  adm={filteredGroups.adm}
                  currentMembers={filteredGroups.currentMembers}
                  totalMembers={filteredGroups.totalMembers}
                  day={filteredGroups.day}
                  time={filteredGroups.time}
                  local={filteredGroups.local}
                  open={open}
                  disciplineCode={filteredGroups.disciplineCode}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default GroupsBody;
