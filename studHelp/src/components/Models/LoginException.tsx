interface Props {
  open: boolean;
  onClose: () => void;
}
import { MdError } from "react-icons/md";

export const LoginException = ({ open, onClose }: Props) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed h-screen inset-0 flex z-50 ">
        <div className="modal-background "></div>
        <div className="modal-content w-full max-w-md  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white font-roboto border border-black rounded-[10px]">
            <div className="flex  flex-col rounded-[30px] text-blue-950  text-center">
              <div
                className="w-full text-center items-center justify-center relative flex"
                style={{ color: "#B22222", fontSize: "7rem" }}
              >
                <MdError />
              </div>
              <h1 className="text-4xl">Login inválido!</h1>
              <h2 className="py-4 text-1xl">Matrícula ou senha inválidos</h2>
              <div className="">
                <button
                  onClick={onClose}
                  className="w-fit px-5 mb-4 shadow-md  hover:bg-red-600  h-fit py-2 border border-opacity-20 hover:border-opacity-100 border-black hover:text-white"
                >
                  OK
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

export default LoginException;
