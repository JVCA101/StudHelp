interface Props {
  open: boolean;
  onClose: () => void;
}

export const Confirm = ({ open, onClose }: Props) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed h-screen inset-0 flex z-50 ">
        <div className="modal-background "></div>
        <div className="modal-content w-full max-w-md  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white font-roboto border border-black rounded-[30px]">
            <div className="flex  flex-col rounded-[30px] text-blue-950">
              <h1 className="py-4 text-2xl text-center">
                Deseja Confirmar a Ação?
              </h1>
              <div className="">
                <button
                  onClick={onClose}
                  className="w-1/2  hover:bg-red-600 border h-10 hover:border-black hover:text-white rounded-bl-[30px]"
                >
                  Cancelar
                </button>
                <button
                  className="w-1/2 text-center rounded-br-[30px] hover:border-black border h-10 hover:bg-green-600 hover:text-white"
                  onClick={onClose}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm transition-opacity  ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
};

export default Confirm;
