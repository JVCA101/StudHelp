import { useState } from "react";
import { Usuario } from "../../../props/data";
import { FaBan } from "react-icons/fa";
import Confirm from "./Confirm";

interface Props {
  open: boolean;
  onClose: () => void;
  participants: Usuario[];
}

export const BanParticipant = ({ open, participants, onClose }: Props) => {
  if (!open) return null;

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  const openModalFunction = () => {
    setOpenModal(true);
  };

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
                  Participantes
                </h1>
                <ul className="p-4">
                  <li>
                    {participants.map((participants, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-x-4"
                      >
                        <div className="text-2xl py-2">
                          {participants.nome} - {participants.matricula}
                        </div>
                        <div
                          style={{ color: "#FF5733", fontSize: "25px" }}
                          className="cursor-pointer hover:scale-125 duration-100"
                          onClick={openModalFunction}
                        >
                          <FaBan />
                        </div>
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Confirm open={openModal} onClose={closeModal} />
      </div>
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity  ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
};

export default BanParticipant;
