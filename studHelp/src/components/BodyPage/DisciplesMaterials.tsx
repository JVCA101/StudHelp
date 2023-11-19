import { useState } from "react";
import { Material } from "../../../props/data.ts";
import { Disciplina } from "../../../props/data.ts";

export const DisciplesMaterials = () => {
  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const mat1: Material = {
    name: "Apostila",
    url: "https://www.google.com/",
  };

  const mat6: Material = {
    name: "Apostila",
    url: "https://www.google.com/",
  };

  const mat5: Material = {
    name: "Apostila",
    url: "https://www.google.com/",
  };

  const mat4: Material = {
    name: "Apostila",
    url: "https://www.google.com/",
  };

  const mat3: Material = {
    name: "Apostila",
    url: "https://www.google.com/",
  };

  const mat2: Material = {
    name: "Apostila",
    url: "https://www.google.com/",
  };

  const subject3: Disciplina = {
    name: "Cálculo 3",
    code: "MAT003",
    difficultyLevel: 3,
    requisitos: [],
    dependentes: [],
    materiais: [mat1, mat2, mat3, mat4, mat5, mat6],
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
            subject3.materiais.map((material, index) => (
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
