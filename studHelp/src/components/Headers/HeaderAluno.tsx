interface Props {
  open: boolean;
}

function HeaderAluno({ open }: Props) {
  return (
    <div
      className={`px-8  ${
        open ? "text-[1.8rem]" : "text-[2.0rem]"
      }  duration-1000 font-semibold font-roboto left-1/4 mt-[7.6rem] py-1 flex gap-x-28 text-blue-900 "}`}
    >
      <h1 className="">Aluno: Gabriel Oliveira Quaresma</h1>
      <h1 className="">Curso: Ciências da Computação</h1>
    </div>
  );
}

export default HeaderAluno;
