import React, { useState } from 'react'
import PopupCriarGrupo from '../components/PopUpCriarGrupo'


const Testes: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <button
          onClick={openPopup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Open Popup
        </button>
  
        <PopupCriarGrupo isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    );
  };

export default Testes