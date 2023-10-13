//* Discussao, Comentario

class Discussao
{
    readonly criador: Usuario;
    readonly disciplina: Disciplina;
    readonly titulo: string;
    readonly comentarios: Array<Comentario>;
    readonly data: Date;  // nao esta no diagrama
    public descricao: string;

    public constructor(criador: Usuario, disciplina: Disciplina, titulo: string, descricao: string)
    {
        this.criador = criador;
        this.disciplina = disciplina;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date();
    }

    public addComentario(comentario: Comentario): void
    {
        // TODO  Adiciona comentario
    }

    public deleteComentario(login: string): void //* outro parametro possivel, comentario: Comentario
    {
        // TODO  Remove comentario
        //! DEVE SER USADO APENAS POR ADMINISTRADOR
    }

    public deleteDiscussao(login: string): void  //? basicamente destructor?
    {
        // TODO  Remove discussao
        //! DEVE SER USADO APENAS POR ADMINISTRADOR
    }
}

class Comentario
{
    readonly criador: Usuario;
    readonly data: Date;  // nao esta no diagrama
    public conteudo: string;
}
