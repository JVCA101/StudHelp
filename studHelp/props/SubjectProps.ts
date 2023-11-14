import { Material } from "./MaterialProps";

export interface Subject {
  name: string;
  code: string;
  difficultyLevel: number;
  requisitos: Subject[];
  dependentes: Subject[];
  materiais: Material[];
}
