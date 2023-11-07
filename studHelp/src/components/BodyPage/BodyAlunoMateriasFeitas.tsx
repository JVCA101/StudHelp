import { useState } from "react";
import PopUpAddDisciplinas from "../Models/PopUpAddDisciplinas";

const BodyAlunoMateriasFeitas: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="font-roboto">
      <div>
        <h1 className="mt-10 text-[1.8rem]">Disciplinas Aprovadas:</h1>
      </div>
      <div className="mt-10">
        <div className="flex justify-center items-center text-[1.1rem] -mt-6">
          <h1>Nada para ver aqui por enquanto</h1>

          <h2
            onClick={openPopup}
            className="text-blue-700 text-bold cursor-pointer hover:font-bold"
          >
            . Adicionar Disciplinas
          </h2>
        </div>

        <div>
          <PopUpAddDisciplinas isOpen={isPopupOpen} onClose={closePopup} />
        </div>
      </div>
    </div>
  );
};

export default BodyAlunoMateriasFeitas;
