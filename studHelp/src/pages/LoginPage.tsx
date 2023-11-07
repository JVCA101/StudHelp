import logoImage from "../assets/logo.png"; // Ajuste o caminho conforme a estrutura do seu projeto
function LoginPage() {
  const handleClick = () => {
    window.location.href = "/aluno";
  };

  return (
    <div className="bg-blue-300 w-screen h-screen flex justify-center items-center relative">
      <img
        src={logoImage}
        className="scale-200 mt-52"
        style={{ position: "absolute", top: "0" }}
      />{" "}
      {/* Mantenha 'position: absolute' para a imagem de fundo */}
      <div className="w-screen h-screen flex justify-center items-center relative">
        <div className="text-center w-full max-w-md rounded-[30px] bg-white p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-3xl text-blue-950 font-roboto font-bold mb-12">
            Bem-vindo ao StudHelp!
          </h1>
          <h2 className="text-2xl text-blue-950 font-roboto font-bold mb-4">
            Login
          </h2>
          <div className="mb-4 px-10">
            <input
              type="text"
              placeholder="Matrícula"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4 px-10">
            <input
              type="text"
              placeholder="Senha"
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            className="bg-start-bar text-white py-2 px-4 rounded hover:bg-cyan-500 duration-300"
            onClick={handleClick}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
