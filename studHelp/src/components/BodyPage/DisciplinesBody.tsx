import { Disciplina } from "../../../props/data.ts";

interface Props {
  subject: Disciplina;
}

export const DisciplinesBody = ({ subject }: Props) => {
  return (
    <div>
      <div className="px-4 font-roboto flex text-4xl gap-x-52 text-blue-900">
        <h1 className="font-bold ">Disciplina: {subject.name}</h1>
        <h2 className="font-bold ">Código: {subject.code}</h2>
      </div>
      <div className="px-4">
        <div className="text-2xl mt-12 font-roboto text-blue-950">
          <div className="flex gap-x-5">
            <h1>Os alunos consideram essa disciplina:</h1>
            {(() => {
              switch (subject.difficultyLevel) {
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
                {subject.requisitos.map((subject, index) => (
                  <div key={index} className="flex">
                    {subject.name};
                  </div>
                ))}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="flex gap-x-5">
                <h1>Dependentes: </h1>
                {subject.dependentes.map((subject, index) => (
                  <div key={index} className="flex">
                    {subject.name}
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
