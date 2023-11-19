interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

import { Grade } from "../../../props/data.ts";

const PopupCriarGrupo = ({ isOpen, onClose }: PopupProps) => {
  if (!isOpen) return null;

  const exemploGrade: Grade = {
    grade: [
      {
        periodo: 1,
        disciplinas: [
          {
            name: "Matemática",
            code: "MAT101",
            difficultyLevel: 3,
            requisitos: [],
            dependentes: [],
            materiais: [
              { name: "Livro de Matemática", url: "Livro" },
              { name: "Calculadora Científica", url: "Equipamento" },
            ],
          },
          {
            name: "Algoritmos",
            code: "ALG101",
            difficultyLevel: 3,
            requisitos: [],
            dependentes: [],
            materiais: [
              { name: "Livro de Algoritmos", url: "Livro" },
              { name: "Calculadora Científica", url: "Equipamento" },
            ],
          },
          {
            name: "Introdução a Computação",
            code: "INT101",
            difficultyLevel: 3,
            requisitos: [],
            dependentes: [],
            materiais: [
              { name: "Livro de Introdução a Computação", url: "Livro" },
              { name: "Calculadora Científica", url: "Equipamento" },
            ],
          },
        ],
      },
      {
        periodo: 2,
        disciplinas: [
          {
            name: "Física",
            code: "FIS101",
            difficultyLevel: 3,
            requisitos: [],
            dependentes: [],
            materiais: [
              { name: "Livro de Física", url: "Livro" },
              { name: "Calculadora Científica", url: "Equipamento" },
            ],
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="fixed inset-0 flex z-50 w-screen h-screen">
        <div className=" w-screen h-screen">
          <div className="bg-white font-roboto border border-black h-[80%] 2xl:w-[30%] xl:w-[35%] lg:w-[40%] md:w-[50%] sm:w-[90%] w-screen left-[50%]  relative top-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-[30px]">
            <div className="flex rounded-[30px] text-blue-950 h-full">
              <img
                src="./src/assets/close 1.svg"
                className="right-0 absolute p-4 scale-125 cursor-pointer"
                onClick={onClose}
              />
              <div className="w-full px-4 h-full">
                <h1 className="text-[1.8rem] font-bold text-center pt-4  w-full">
                  Grade do Curso
                </h1>
                <ul className="h-full">
                  <li className="hover:overflow-y-scroll h-[90%]">
                    {exemploGrade.grade.map((periodo, index) => (
                      <div key={index} className="gap-x-5 text-2xl">
                        <span className="">{periodo.periodo}° Período</span>
                        {periodo.disciplinas.map((disciplina) => (
                          <div
                            key={disciplina.code}
                            className="gap-x-5 text-[1.2rem] py-1 "
                          >
                            {disciplina.name} - {disciplina.code}
                          </div>
                        ))}
                        <div
                          className="h-[1px] bg-black opacity-30"
                          style={{ margin: "10px 0" }}
                        ></div>
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
};

export default PopupCriarGrupo;
