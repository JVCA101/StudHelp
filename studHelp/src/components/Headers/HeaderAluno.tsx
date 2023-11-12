import HeaderStyle from "../Models/HeaderStyle";

interface Props {
  open: boolean;
}

function HeaderAluno({ open }: Props) {
  const name: string = "Gabriel Oliveira Quaresma";
  const course: string = "Ciências da Computação";
  return (
    <HeaderStyle>
      <div
        className={`px-4  ${
          open ? "text-[2.7rem]" : "text-[2.0rem]"
        }  duration-1000 font-semibold font-roboto  py-10 relative flex gap-x-28 text-blue-900 "}`}
      >
        <h1>Aluno: {name}</h1>
        <h1>Curso: {course}</h1>
      </div>
    </HeaderStyle>
  );
}

export default HeaderAluno;
