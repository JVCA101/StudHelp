import SearchDisciplinesHeader from "../AuxComponents/SearchDisciplinesHeader";
import HeaderStyle from "../Models/HeaderStyle";
interface Props {
  inputContent: string;
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
}

export const DisciplinesHeader = ({ inputContent, setInputContent }: Props) => {
  return (
    <HeaderStyle>
      <SearchDisciplinesHeader
        setInputContent={setInputContent}
        inputContent={inputContent}
        content={"Insira código da Disciplina"}
      ></SearchDisciplinesHeader>
    </HeaderStyle>
  );
};

export default DisciplinesHeader;
