import SearchDisciplinesHeader from "../AuxComponents/SearchDisciplinesHeader";
import HeaderStyle from "../Models/HeaderStyle";
interface Props {
  inputContent: string;
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
}

export const DisciplinesHeader = ({ inputContent, setInputContent }: Props) => {
  return (
    <HeaderStyle>
      <div className="h-full top-[20%] w-1/2">
        <SearchDisciplinesHeader
          setInputContent={setInputContent}
          inputContent={inputContent}
          content={"Insira código da Disciplina"}
        ></SearchDisciplinesHeader>
      </div>
    </HeaderStyle>
  );
};

export default DisciplinesHeader;
