interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

import { Grade } from "../../../props/Grade.ts";

const PopupCriarGrupo = ({ isOpen, onClose }: PopupProps) => {
  if (!isOpen) return null;

  const grade: Grade = [
    {
      periodo: 1,
      disciplinas: [
        "Cálculo 1",
        "Física 1",
        "Introdução à Computação",
        "Leitura e Produção de Textos",
        "Álgebra Vetorial e Geometria Analítica",
      ],
    },
    {
      periodo: 2,
      disciplinas: [
        "Cálculo 2",
        "Física 2",
        "Programação 1",
        "Metodologia Científica",
        "Matemática Discreta",
      ],
    },
    {
      periodo: 3,
      disciplinas: [
        "Cálculo 3",
        "Física 3",
        "Programação 2",
        "Teoria dos Grafos",
        "Sistemas Digitais",
      ],
    },
    {
      periodo: 4,
      disciplinas: [
        "Cálculo 4",
        "Física 4",
        "Programação 3",
        "Banco de Dados 1",
        "Sistemas Operacionais",
      ],
    },
    {
      periodo: 5,
      disciplinas: [
        "Cálculo 5",
        "Física 5",
        "Engenharia de Software 1",
        "Banco de Dados 2",
        "Redes de Computadores",
      ],
    },
  ];

  return (
    <>
      <div className="fixed inset-0 flex z-50 w-screen h-screen">
        <div className=" w-screen h-screen">
          <div className="bg-white font-roboto border border-black h-[80%] w-[80%] left-[10%] relative top-[10%] rounded-[30px]">
            <div className="flex rounded-[30px] text-blue-950 ">
              <img
                src="./src/assets/close 1.svg"
                className="right-0 absolute p-2 scale-125 cursor-pointer"
                onClick={onClose}
              />
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
