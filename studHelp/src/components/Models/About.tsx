interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const About = ({ isOpen, onClose }: PopupProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed h-screen inset-0 flex z-50 text-blue-950 ">
        <div className="modal-background"></div>
        <div className="modal-content w-[50vh] max-w-md  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white font-roboto  border border-black rounded-[10px]">
            <img
              src="./src/assets/close 1.svg"
              className="right-0 absolute p-2 scale-125 cursor-pointer"
              onClick={onClose}
            />
            <div className="mt-8 mb-8 px-4">
              <h1 className="text-2xl px-2 underline">Sobre StudHelp</h1>
              <p className="px-2 text-[1.3rem] mt-5">
                Somos uma iniciativa de estudantes da UFJF para reunir e
                disponibilizar informações úteis sobre matérias e cursos da
                faculdade. A ideia se iniciou como um trabalho da disciplina
                Modelagem de Sistemas com o objetivo de criar um sistema que
                sentíssemos demanda no nosso dia-a-dia e o resultado em que
                chegamos foi o de criar um sistema de recomendação de
                disciplinas baseado nas disciplinas já cursadas e feedback de
                outros alunos, porém se expandiu para fóruns, grupos de estudos
                e materiais de apoio para diferentes disciplinas.
              </p>
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

export default About;
