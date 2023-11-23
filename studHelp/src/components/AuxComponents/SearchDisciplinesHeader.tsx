import InputModel from "../Models/InputModel";

interface SearchDisciplinesHeaderProps {
  content: string;
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
  inputContent: string;
}

function SearchDisciplinesHeader({
  content,
  setInputContent,
  inputContent,
}: SearchDisciplinesHeaderProps) {
  return (
    <div className=" font-roboto top-[20%] relative">
      <div className="">
        <div>
          <h1 className="text-2xl font-roboto select-none">
            Buscar Disciplina:
          </h1>
        </div>
        <div className="flex gap-x-1">
          <div className="w-full">
            <InputModel
              type="text"
              placeholder={content}
              setInputContent={setInputContent}
              inputContent={inputContent}
            />
          </div>
          <img src={`./src/assets/search 1.svg`} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default SearchDisciplinesHeader;
