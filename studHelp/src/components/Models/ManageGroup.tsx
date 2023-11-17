import { useState } from "react";
import EditGroup from "./EditGroup";

interface Props {
  open: boolean;
  isAdmin: boolean;
}

export const ManageGroup = ({ open, isAdmin }: Props) => {
  if (!open) return null;

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <div>
      {!isOpen ? (
        <div className="bg-white  rounded-[20%] text-center text-blue-900  w-fit h-fit absolute ">
          <div className="hover:bg-red-500 p-1 rounded-t-[20%] border-black border duration-300 cursor-pointer">
            <div className="hover:scale-110 w-full h-full hover:text-white transition-colors  ">
              <h1>Sair</h1>
            </div>
          </div>

          {isAdmin && (
            <div>
              <div
                className="p-1 hover:bg-blue-200 rounded-b-[20%] border border-black cursor-pointer"
                onClick={onOpen}
              >
                <div className="hover:scale-110 w-full h-full ">
                  <h1>Editar</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <EditGroup isOpen={isOpen} onClose={onClose} />
      )}
    </div>
  );
};

export default ManageGroup;
