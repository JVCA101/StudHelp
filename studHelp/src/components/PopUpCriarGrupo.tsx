// Popup.tsx
import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupCriarGrupo: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="modal-background"></div>
        <div className="modal-content w-1/4 h-1/4">
          <div className="bg-gray-400 px-4">
            <h1>
                Novo Grupo
            </h1>
            <div className="mb-4">
                <input type="text" placeholder="Disciplina" className="border w-full block p-2"/>
            </div>
            <div className="mb-4">
                <input type="text" placeholder="Nome do Grupo" className="border w-full block p-2"/>
            </div>
            <div className="mb-4">
                <input type="text" placeholder="Descrição" className="border w-full block p-2"/>
            </div>
            <div>
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
