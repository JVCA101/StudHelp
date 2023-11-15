import { Material } from "./MaterialProps";

export interface Subject {
  name: string;
  code: string;
  difficultyLevel: number;
  requisitos: Array<Subject>;
  dependentes: Array<Subject>;
  materiais: Array<Material>;
}
