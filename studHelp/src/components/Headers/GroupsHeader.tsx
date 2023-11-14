import CreateGroup from "../AuxComponents/CreateGroup";
import SearchDisciplinesHeader from "../AuxComponents/SearchDisciplinesHeader";
import HeaderStyle from "../Models/HeaderStyle";

export const GroupHeader = () => {
  return (
    <HeaderStyle>
      <div className="w-full h-full flex">
        <div className="w-[70%]">
          <SearchDisciplinesHeader />
        </div>
        <CreateGroup />
      </div>
    </HeaderStyle>
  );
};
export default GroupHeader;

// <div className="flex w-full">
//           <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4">
//             <SearchDisciplinesHeader />
//           </div>
//           <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/4">
//             <CreateGroup />
//           </div>
//         </div>
