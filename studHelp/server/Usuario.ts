//* Usuario, Estudante, Administrador

class Usuario
{
    private nome: string;
    private admin: boolean;
    private login: string;
    readonly senha: string;
}

class Estudante extends Usuario
{
    readonly curso: Curso;
    readonly historico: Array<Disciplina>;
    readonly anoDeIngresso: string;
    public matriculadas: Array<Disciplina>;	
    public grupos: Array<string>;
}

class Administrador extends Usuario
{
    public banirEstudante(estudante: Estudante): void
    {
        // TODO  Bane estudante
    }
}
