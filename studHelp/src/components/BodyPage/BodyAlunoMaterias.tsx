import { useState } from "react";
import DisciplinesStyle from "../Models/DisciplinesStyle";
import PopUpGradeCurso from "../Models/PopUpGradeCurso";
import PopUpDisciplinasRecomendadas from "../Models/PopUpDisciplinasRecomendadas";

function HeaderAluno() {
  const Menus = [
    { name: "Cálculo 1", code: "MAT001" },
    { name: "Cálculo 2", code: "MAT002" },
    { name: "Cálculo 3", code: "MAT003" },
    { name: "Cálculo 4", code: "MAT004" },
    { name: "Cálculo 5", code: "MAT005" },
    { name: "Cálculo 6", code: "MAT006" },
    { name: "Cálculo 1", code: "MAT001" },
    { name: "Cálculo 2", code: "MAT002" },
    { name: "Cálculo 3", code: "MAT003" },
    { name: "Cálculo 4", code: "MAT004" },
    { name: "Cálculo 5", code: "MAT005" },
    { name: "Cálculo 6", code: "MAT006" },
  ];

  const [isGradeOpen, setIsGradeOpen] = useState(false);

  const [isDisciplinasOpen, setIsDisciplinasOpen] = useState(false);

  const openDisciplinas = () => {
    setIsDisciplinasOpen(true);
  };

  const closeDisciplinas = () => {
    setIsDisciplinasOpen(false);
  };

  const openGrade = () => {
    setIsGradeOpen(true);
  };

  const closeGrade = () => {
    setIsGradeOpen(false);
  };

  return (
    <div className="font-roboto font-medium text-blue-900 w-full">
      <div className="">
        <h1 className="text-[1.8rem]">Minhas Disciplinas:</h1>

        <div className="overflow-x-scroll py-4">
          <div className="flex gap-x-32">
            {Menus.map(
              (menu, index) =>
                index % 2 === 0 && (
                  <div key={index} className="flex">
                    <DisciplinesStyle name={menu.name} code={menu.code} />
                  </div>
                )
            )}
          </div>
          <div className="flex gap-x-32">
            {Menus.map(
              (menu, index) =>
                index % 2 === 1 && (
                  <div key={index} className="flex">
                    <DisciplinesStyle name={menu.name} code={menu.code} />
                  </div>
                )
            )}
          </div>
        </div>

        <div className="flex mt-7 w-fit text-[1.2rem] text-blue-400 cursor-pointer gap-x-[165px] px-8">
          <h1 className=" hover:text-blue-900 gap-x-10" onClick={openGrade}>
            Consultar grade do curso
          </h1>
          <h1 className=" hover:text-blue-900 " onClick={openDisciplinas}>
            Consultar Disciplinas Recomendadas
          </h1>
        </div>
        <div>
          <PopUpGradeCurso isOpen={isGradeOpen} onClose={closeGrade} />
        </div>
        <div>
          <PopUpDisciplinasRecomendadas
            isOpen={isDisciplinasOpen}
            onClose={closeDisciplinas}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderAluno;
