//* Discussao, Comentario

import { Disciplina } from "./Disciplina";
import { Usuario } from "./Usuario";

export class Discussao
{
    readonly criador: Usuario;
    readonly disciplina: Disciplina;
    readonly titulo: string;
    readonly comentarios: Array<Comentario>;
    readonly data: Date;  // nao esta no diagrama
    public descricao: string;

    public addComentario(comentario: Comentario): void
    {
        // TODO  Adiciona comentario
        this.comentarios.push(comentario);
    }

    public deleteComentario(login: string): void //* outro parametro possivel, comentario: Comentario
    {
        // TODO  Remove comentario
        //! DEVE SER USADO APENAS POR ADMINISTRADOR
    }

    public deleteDiscussao(login: string): void
    {
        // TODO  Remove discussao
        //! DEVE SER USADO APENAS POR ADMINISTRADOR
    }
}

export class Comentario
{
    readonly criador: Usuario;
    readonly data: Date;  // nao esta no diagrama
    public conteudo: string;
}
