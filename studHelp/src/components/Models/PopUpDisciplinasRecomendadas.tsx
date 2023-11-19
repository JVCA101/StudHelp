interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

import { Disciplina } from "../../../props/data.ts";

const PopupCriarGrupo = ({ isOpen, onClose }: PopupProps) => {
  if (!isOpen) return null;

  const exemploDisciplinas: Disciplina[] = [
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
  ];
  return (
    <>
      <div className="fixed inset-0 flex z-50 w-screen h-screen">
        <div className=" w-screen h-screen">
          <div className="bg-white font-roboto border border-black h-fit 2xl:w-[30%] xl:w-[35%] lg:w-[40%] md:w-[50%] sm:w-[90%] w-screen left-[50%]  relative top-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-[30px]">
            <div className="flex rounded-[30px] text-blue-950 h-fit">
              <img
                src="./src/assets/close 1.svg"
                className="right-0 absolute p-4 scale-125 cursor-pointer"
                onClick={onClose}
              />
              <div className="w-full px-4 h-full  p-4">
                <h1 className="text-[1.8rem] font-bold text-center  w-full">
                  Disciplinas Recomendadas
                </h1>
                <ul className="p-4">
                  <li>
                    {exemploDisciplinas.map((disciplina, index) => (
                      <div key={index} className="text-2xl py-2">
                        {disciplina.name} - {disciplina.code}
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
