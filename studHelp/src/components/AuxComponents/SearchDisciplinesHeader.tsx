import InputModel from "../Models/InputModel";

function SearchDisciplinesHeader() {
  return (
    <div className=" font-roboto top-[20%] relative">
      <div className="">
        <div>
          <h1 className="text-2xl font-roboto select-none">
            Buscar Disciplina:
          </h1>
        </div>
        <div className="flex gap-x-1">
          <div className="w-1/2">
            <InputModel
              type="text"
              placeholder="Insira o Código da Disciplina"
            ></InputModel>
          </div>
          <img src={`./src/assets/search 1.svg`} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default SearchDisciplinesHeader;
