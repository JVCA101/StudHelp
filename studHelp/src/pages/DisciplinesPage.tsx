import SideBar from "../components/AuxComponents/SideBar";
import DisciplinesBody from "../components/BodyPage/DisciplinesBody";
import DisciplesMaterials from "../components/BodyPage/DisciplesMaterials";
import PageComponents from "../components/Models/PageComponents";
import { useSelector } from "react-redux";
import { AppState } from "../../props/state";
import { ComponentStyle } from "../components/Models/ComponentStyle";
import DisciplinesHeader from "../components/Headers/DisciplinesHeader";
import BodyStyle from "../components/Models/BodyStyle";
import { useState } from "react";
import { Disciplina } from "../../props/data";

const DisciplinesPage = () => {
  const open = useSelector((state: AppState) => state.open);
  const [inputContent, setInputContent] = useState("");

  const material1 = {
    name: "Apostila",
    url: "https://www.google.com/",
  };
  const material2 = {
    name: "Lista de Exercícios",
    url: "https://www.google.com/",
  };
  const Algoritmo: Disciplina = {
    name: "Algoritmo",
    code: "DCC001",
    difficultyLevel: 1,
    requisitos: [],
    dependentes: [
      {
        name: "Programação 1",
        code: "DCC003",
        difficultyLevel: 2,
        requisitos: [],
        dependentes: [
          {
            name: "Programação 2",
            code: "DCC004",
            difficultyLevel: 3,
            requisitos: [],
            dependentes: [],
            materiais: [],
          },
        ],
        materiais: [],
      },
    ],
    materiais: [material1, material2],
  };

  const Calculo1: Disciplina = {
    name: "Cálculo 1",
    code: "MAT001",
    difficultyLevel: 2,
    requisitos: [],
    dependentes: [],
    materiais: [material1, material2],
  };

  const Calculo2: Disciplina = {
    name: "Cálculo 2",
    code: "MAT002",
    difficultyLevel: 3,
    requisitos: [Calculo1],
    dependentes: [],
    materiais: [material1, material2],
  };

  const Calculo3: Disciplina = {
    name: "Cálculo 3",
    code: "MAT003",
    difficultyLevel: 3,
    requisitos: [Calculo2],
    dependentes: [],
    materiais: [material1, material2],
  };

  const ModelagemDeSistemas: Disciplina = {
    name: "Modelagem de Sistemas",
    code: "DCC002",
    difficultyLevel: 1,
    requisitos: [],
    dependentes: [],
    materiais: [material1, material2],
  };

  const Programacao1: Disciplina = {
    name: "Programação 1",
    code: "DCC003",
    difficultyLevel: 2,
    requisitos: [Algoritmo],
    dependentes: [
      {
        name: "Programação 2",
        code: "DCC004",
        difficultyLevel: 3,
        requisitos: [],
        dependentes: [],
        materiais: [],
      },
    ],
    materiais: [material1, material2],
  };

  const Programacao2: Disciplina = {
    name: "Programação 2",
    code: "DCC004",
    difficultyLevel: 3,
    requisitos: [Programacao1],
    dependentes: [
      {
        name: "Programação 3",
        code: "DCC005",
        difficultyLevel: 3,
        requisitos: [],
        dependentes: [ModelagemDeSistemas],
        materiais: [],
      },
    ],
    materiais: [material1, material2],
  };

  const Programacao3: Disciplina = {
    name: "Programação 3",
    code: "DCC005",
    difficultyLevel: 3,
    requisitos: [Programacao2],
    dependentes: [ModelagemDeSistemas],
    materiais: [material1, material2],
  };

  const disciplinas: Disciplina[] = [
    Algoritmo,
    Calculo1,
    Calculo2,
    Calculo3,
    ModelagemDeSistemas,
    Programacao1,
    Programacao2,
    Programacao3,
  ];

  function getDisciplina(code: string): Disciplina | null {
    for (let i = 0; i < disciplinas.length; i++) {
      if (disciplinas[i].code === code) {
        return disciplinas[i];
      }
    }
    return null;
  }

  const disciplina = getDisciplina(inputContent.toLocaleUpperCase());

  const text = "Insira o código da disciplina no campo de busca";

  document.title = "Disciplinas - StudHelp";
  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="absolute w-screen">
        <SideBar />
      </div>
      <PageComponents open={open}>
        <DisciplinesHeader
          setInputContent={setInputContent}
          inputContent={inputContent}
        />

        {disciplina === null ? (
          <BodyStyle>
            <ComponentStyle>
              <h1 className="font-roboto text-center text-2xl">{text}</h1>
            </ComponentStyle>
          </BodyStyle>
        ) : (
          <BodyStyle>
            <ComponentStyle>
              <DisciplinesBody subject={disciplina} />
            </ComponentStyle>
            <ComponentStyle>
              <DisciplesMaterials materiais={disciplina.materiais} />
            </ComponentStyle>
          </BodyStyle>
        )}
      </PageComponents>
    </div>
  );
};

export default DisciplinesPage;
