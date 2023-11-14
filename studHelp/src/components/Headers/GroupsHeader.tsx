import CreateGroup from "../AuxComponents/CreateGroup";
import SearchDisciplinesHeader from "../AuxComponents/SearchDisciplinesHeader";
import HeaderStyle from "../Models/HeaderStyle";

interface GroupHeaderProps {
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
  inputContent: string;
}

export const GroupHeader = ({
  setInputContent,
  inputContent,
}: GroupHeaderProps) => {
  return (
    <HeaderStyle>
      <div className="w-full h-full flex">
        <div className="w-[70%]">
          <SearchDisciplinesHeader
            content={"Filtrar por código de Disciplina"}
            setInputContent={setInputContent}
            inputContent={inputContent}
          />
        </div>
        <CreateGroup />
      </div>
    </HeaderStyle>
  );
};
export default GroupHeader;
