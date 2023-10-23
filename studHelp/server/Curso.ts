//* Curso

import { Disciplina } from "./Disciplina";

export class Curso
{
    readonly nome: string;
    readonly codigo: string;
    readonly grade: Array<Disciplina>;

    
    public getDisciplinas(periodo: number): Array<Disciplina>
    {
        // // return this.grade.filter(disciplina => disciplina.periodo == periodo);
        return this.grade;
    }
}