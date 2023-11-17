interface DisciplinesStyleProps {
  name: string;
  code: string;
}

export const DisciplinesStyle = ({ name, code }: DisciplinesStyleProps) => {
  return (
    <div className="text-white ">
      <div className="bg-blue-900 hover:bg-blue-700 transition-colors duration-400 w-64 h-24 text-[1.5rem] rounded-[90px] mt-7">
        <h1 className="left-7 py-2 relative">{name}</h1>
        <h1 className="left-7 relative text-[1.1rem] ">{code}</h1>
      </div>
    </div>
  );
};

export default DisciplinesStyle;
