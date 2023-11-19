import { Disciplina } from "../../../props/data.ts";

export const DisciplinesBody = () => {
  const subject1: Disciplina = {
    name: "Cálculo 1",
    code: "MAT001",
    difficultyLevel: 1,
    requisitos: [],
    dependentes: [],
    materiais: [],
  };
  const subject2: Disciplina = {
    name: "Cálculo 2",
    code: "MAT002",
    difficultyLevel: 1,
    requisitos: [],
    dependentes: [],
    materiais: [],
  };
  const subject4: Disciplina = {
    name: "Cálculo 4",
    code: "MAT004",
    difficultyLevel: 1,
    requisitos: [],
    dependentes: [],
    materiais: [],
  };
  const subject3: Disciplina = {
    name: "Cálculo 3",
    code: "MAT003",
    difficultyLevel: 3,
    requisitos: [subject1, subject2],
    dependentes: [subject4],
    materiais: [],
  };

  return (
    <div>
      <div className="px-4 font-roboto flex text-4xl gap-x-52 text-blue-900">
        <h1 className="font-bold ">Disciplina: {subject3.name}</h1>
        <h2 className="font-bold ">Código: {subject3.code}</h2>
      </div>
      <div className="px-4">
        <div className="text-2xl mt-12 font-roboto text-blue-950">
          <div className="flex gap-x-5">
            <h1>Os alunos consideram essa disciplina:</h1>
            {(() => {
              switch (subject3.difficultyLevel) {
                case 1:
                  return <p className="text-green-400 font-bold">Fácil</p>;
                case 2:
                  return <p className="text-yellow-300 font-bold">Moderada</p>;
                case 3:
                  return <p className="text-red-500 font-bold">Difícil</p>;
                default:
                  return null;
              }
            })()}
          </div>
          <div className="py-12">
            <ul>
              <li className="flex gap-x-5">
                <h1>Requisitos: </h1>
                {subject3.requisitos.map((subject3, index) => (
                  <div key={index} className="flex">
                    {subject3.name};
                  </div>
                ))}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="flex gap-x-5">
                <h1>Dependentes: </h1>
                {subject3.dependentes.map((subject3, index) => (
                  <div key={index} className="flex">
                    {subject3.name}
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisciplinesBody;
