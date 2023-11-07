import InputModel from "./InputModel";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupCriarGrupo: React.FC<PopupProps> = ({
  isOpen,
  onClose,
}: PopupProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed h-screen inset-0 flex z-50 ">
        <div className="modal-background"></div>
        <div className="modal-content w-full max-w-md  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white font-roboto border border-black rounded-[30px]">
            <div className="px-4">
              <h1 className="text-center text-2xl  py-2 text-blue-950">
                Novo Grupo
              </h1>
              <div className="caret-blue-600">
                <div className="mb-4">
                  <InputModel
                    type="text"
                    placeholder="Código da Disciplina"
                  ></InputModel>
                </div>
                <div className="mb-4">
                  <InputModel
                    type="number"
                    placeholder="Número de Membros"
                  ></InputModel>
                </div>
                <div className="mb-4">
                  <InputModel type="text" placeholder="Descrição"></InputModel>
                </div>
                <div className="mb-4">
                  <InputModel type="data" placeholder="Horário"></InputModel>
                </div>
                <div className="mb-4">
                  <select
                    name="diaDaSemana"
                    className="border border-blue-950 rounded-lg text-blue-950 placeholder-blue-950 focus:outline-none focus:ring w-full block p-2"
                  >
                    <option value="domingo">Domingo</option>
                    <option value="segunda">Segunda-feira</option>
                    <option value="terca">Terça-feira</option>
                    <option value="quarta">Quarta-feira</option>
                    <option value="quinta">Quinta-feira</option>
                    <option value="sexta">Sexta-feira</option>
                    <option value="sabado">Sábado</option>
                  </select>
                </div>
                <div className="mb-4">
                  <InputModel type="text" placeholder="Local"></InputModel>
                </div>
              </div>
            </div>

            <div className="flex rounded-[30px] h-12 text-blue-950">
              <button
                onClick={onClose}
                className="w-1/2  hover:bg-red-600 border hover:border-black hover:text-white rounded-bl-[30px]"
              >
                Cancelar
              </button>
              <button
                className="w-1/2 text-center rounded-br-[30px] hover:border-black border hover:bg-green-600 hover:text-white"
                onClick={onClose}
              >
                Criar Grupo
              </button>
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
