import { useState } from "react";

function DisciplesMaterials() {
  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  return (
    <div className="px-8 text-blue-900">
      <div
        className="flex gap-x-8 hover:font-bold cursor-pointer"
        onClick={toggleList}
      >
        {listOpen ? (
          <img
            src="./src/assets/folder (1) 1.svg"
            className="mt-1 duration-500"
          />
        ) : (
          <img src="./src/assets/folder 1.svg" className="mt-1 duration-500" />
        )}
        <h1 className="text-[1.9rem] font-roboto">Material de Apoio</h1>
        <img
          src="./src/assets/right-arrow-angle 2.svg"
          className={`scale-110 mt-1 font-bold fill-current duration-200 ${
            listOpen && "rotate-[90deg]"
          }`}
          onClick={toggleList}
        />
      </div>
    </div>
  );
}

export default DisciplesMaterials;
