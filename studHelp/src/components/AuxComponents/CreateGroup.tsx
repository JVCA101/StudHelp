import { useState } from "react";
import PopupCriarGrupo from "../Models/PopUpCriarGrupo";

const CreateGroup: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="top-[40%] relative w-fit ">
      <div className="cursor-pointer hover:underline">
        <div className="flex gap-x-2" onClick={openPopup}>
          <img src="./src/assets/plus 1.svg" />
          <h1 className="text-2xl  font-roboto">Iniciar novo grupo</h1>
        </div>
      </div>

      <div>
        <PopupCriarGrupo isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
};

export default CreateGroup;
