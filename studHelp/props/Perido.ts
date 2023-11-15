import { Disciplina } from "../server/model/Disciplina";

export interface Periodo {
  periodo: number;
  disciplinas: Array<Disciplina>;
}
