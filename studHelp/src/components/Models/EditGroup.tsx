import InputModel from "./InputModel";
import { useState } from "react";
import BanParticipant from "./BanParticipante";
import { Usuario } from "../../../props/data";
import Confirm from "./Confirm";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditGroup: React.FC<PopupProps> = ({ isOpen, onClose }: PopupProps) => {
  if (!isOpen) return null;

  const [open, setOpen] = useState(false);

  const closeBan = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  const openModalFunction = () => {
    setOpenModal(true);
  };

  const participants: Usuario[] = [
    {
      nome: "João",
      matricula: "2019000000",
      login: "joao",
      senha: "123456",
      admin: false,
    },
    {
      nome: "João",
      matricula: "2019000000",
      login: "joao",
      senha: "123456",
      admin: false,
    },
    {
      nome: "João",
      matricula: "2019000000",
      login: "joao",
      senha: "123456",
      admin: false,
    },
    {
      nome: "João",
      matricula: "2019000000",
      login: "joao",
      senha: "123456",
      admin: false,
    },
  ];

  const group = {
    disciplineCode: "DCC123",
    adm: "João",
    currentMembers: ["João", "Maria"],
    totalMembers: 5,
    day: "Segunda",
    time: "08:00",
    local: "Sala 4",
    description: "Grupo de estudos para a prova de cálculo 1 ",
  };
  return (
    <>
      {!open ? (
        <div className="fixed h-screen inset-0 flex z-50 ">
          <div className="modal-background"></div>
          <div className="modal-content w-full max-w-md  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white font-roboto border border-black rounded-[30px]">
              <div className="px-4">
                <h1 className="text-center text-2xl  py-2 text-blue-950">
                  Editar Grupo
                </h1>
                <div className="caret-blue-600 text-center">
                  <div className="mb-4">
                    <h1 className="text-blue-950">
                      Alterar número de Participantes
                    </h1>
                    <InputModel
                      type="number"
                      placeholder={group.totalMembers.toString()}
                    ></InputModel>
                  </div>
                  <div className="mb-4">
                    <h1 className="text-blue-950">Mudar Descrição</h1>
                    <InputModel
                      type="text"
                      placeholder={group.description}
                    ></InputModel>
                  </div>
                  <div className="mb-4">
                    <h1 className="text-blue-950">Mudar Horário</h1>
                    <InputModel type="time" placeholder="Horário"></InputModel>
                  </div>
                  <div className="mb-4">
                    <h1 className="text-blue-950">Mudar Dia da Semana</h1>
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
                    <h1 className="text-blue-950">Mudar Local</h1>
                    <InputModel
                      type="text"
                      placeholder={group.local}
                    ></InputModel>
                  </div>
                  <div
                    className="mb-2 text-blue-950 cursor-pointer hover:scale-110 duration-300"
                    onClick={onOpen}
                  >
                    <h1>Expulsar Participante</h1>
                  </div>
                  <div
                    className="mb-2 text-blue-950 cursor-pointer hover:scale-110 hover:text-red-600  text-center duration-300"
                    onClick={openModalFunction}
                  >
                    <h1>Excluir Grupo</h1>
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
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <BanParticipant
          open={open}
          onClose={closeBan}
          participants={participants}
        />
      )}
      <Confirm open={openModal} onClose={closeModal} />
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
};

export default EditGroup;
