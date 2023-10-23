//* GrupoEstudo

import { Estudante } from "./Usuario";

export class GrupoEstudo
{
    readonly id: string;
    readonly disciplina: string;
    public diaSemana: string;
    public estudanteAdmin: Estudante;
    public estudantes: Array<Estudante>;


    public addEstudante(idEstudante: number): void
    {
        // TODO  Adiciona estudante
        //? Apenas estudanteAdmin pode adicionar estudante?
    }

    public removeEstudante(idEstudante: number): void
    {
        // TODO  Remove estudante
        //? Apenas estudanteAdmin pode remover estudante?
    }

    public deleteGrupo(): void //? basicamente destructor?
    {
        // TODO  Remove grupo
        //? Apenas estudanteAdmin pode remover grupo?
    }
}