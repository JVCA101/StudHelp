//* GrupoEstudo

import { Estudante } from "./Usuario";

enum DiaSemana
{
    DOMINGO,
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO
}

export class GrupoEstudo
{
    readonly id: string;
    readonly disciplina: string;
    public diaSemana: DiaSemana;
    public estudanteAdmin: Estudante;
    public estudantes: Array<Estudante>;


    public addEstudante(idEstudante: number): void
    {
        // TODO  Adiciona estudante
        // Estudante estudante = getEstudanteByID(idEstudante);
        // this.estudantes.push(estudante);
    }

    public removeEstudante(idEstudante: number): void
    {
        // TODO  Remove estudante
        // Proprio estudante ou estudanteAdmin pode remover estudante
        // estudante = getEstudante(idEstudante);
        // this.estudantes.splice(this.estudante, 1);
    }

    public deleteGrupo(): void
    {
        // TODO  Remove grupo
    }
}