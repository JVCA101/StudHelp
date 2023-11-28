import { useState } from "react";
import { Material } from "../../../props/data.ts";

interface Props {
  materiais: Material[];
}

export const DisciplesMaterials = ({ materiais }: Props) => {
  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  return (
    <div className="px-8 text-blue-900 ">
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
        <ul>
          <li></li>
        </ul>
      </div>
      <ul className="">
        <li className="">
          {listOpen &&
            materiais.map((material, index) => (
              <div key={index} className="text-2xl py-1  underline">
                <a
                  href={material.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {material.name}
                </a>
              </div>
            ))}
        </li>
      </ul>
    </div>
  );
};

export default DisciplesMaterials;
