import InputModel from "./InputModel";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopUpAddDisciplinas: React.FC<PopupProps> = ({
  isOpen,
  onClose,
}: PopupProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed h-screen inset-0 flex z-50 text-black ">
        <div className="modal-background"></div>
        <div className="modal-content w-full max-w-md  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white font-roboto border border-black rounded-[10px]">
            <img
              src="./src/assets/close 1.svg"
              className="right-0 absolute p-2 scale-125 cursor-pointer"
              onClick={onClose}
            />
            <div className="mt-8 mb-8 px-4">
              <h1 className="text-2xl px-2">Adicionar Disciplinas</h1>
              <div className="flex gap-x-1 mt-4">
                <InputModel
                  type="text"
                  placeholder="Insira o Código da Disciplina"
                ></InputModel>
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

export default PopUpAddDisciplinas;
