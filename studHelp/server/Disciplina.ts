//* Disciplina, Turma, MaterialApoio

enum Dificuldade  //? adicionar mais opcoes?
{
    FACIL,
    MEDIO,
    DIFICIL
}

export class Disciplina
{
    private indiceAprovacao: number;
    readonly name: string;
    readonly codigo: string;
    readonly creditos: number; // nao esta no diagrama
    readonly preRequisitos: Array<Disciplina>;
    readonly dificuldade: Dificuldade;
    readonly ementa;  //* Tipo: url
    public materiais: Array<MaterialApoio>;
}

export class Turma
{
    readonly codigoDisciplina: string;
    readonly codigoSemestre: string;
    readonly aprovado: boolean;
}

export class MaterialApoio
{
    public nome: string;
    public arquivo; //* Tipo: url
}