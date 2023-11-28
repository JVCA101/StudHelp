export interface Usuario {
  nome: string;
  admin: boolean;
  login: string;
  senha: string;
}

export interface Grupo {
  disciplina: Disciplina;
  descricao: string;
  dia: string;
  hora: string;
  local: string;
  adm: Usuario;
  currentMembers: Array<Estudante>;
  totalMembers: number;
}

export interface Estudante extends Usuario {
  curso: Curso;
  historico: Array<Disciplina>;
  anoDeIngresso: string;
  matriculadas: Array<Disciplina>;
  grupos: Array<string>;
}

export interface Disciplina {
  name: string;
  code: string;
  difficultyLevel: number;
  requisitos: Array<Disciplina>;
  dependentes: Array<Disciplina>;
  materiais: Array<Material>;
}

export interface Material {
  name: string;
  url: string;
}

export interface Periodo {
  periodo: number;
  disciplinas: Array<Disciplina>;
}

export interface Curso {
  nome: string;
  codigo: string;
  grade: Grade;
}
export interface Grade {
  grade: Array<Periodo>;
}
