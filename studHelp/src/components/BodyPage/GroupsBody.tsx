interface Props {
  open: boolean;
}

function GroupsBody({ open }: Props) {
  return (
    <div className="mt-8  relative font-roboto">
      <div>
        <h1 className="text-4xl font-roboto px-8">Grupo da Disciplina:</h1>
      </div>
      <div className="relative h-96 mt-10 overflow-y-scroll">
        <div className="px-8 ">
          <div
            className={`bg-blue-900 ${
              open ? "w-[26%]" : "w-[20%]"
            } h-[74%] rounded-[40px] absolute top-3`}
          ></div>

          <div
            className={`bg-blue-600  ${
              open ? "w-[25%]" : "w-[19%]"
            } h-[73%] rounded-[40px] left-12 absolute`}
          >
            <div className="relative">
              <h1
                className={`top-[14rem]  ${
                  open ? "text-3xl" : "text-[1.6rem]"
                } absolute left-[35%] text-white  hover:text-blue-300  hover:font-medium hover:text-[2.0rem] font-roboto duration-300 cursor-pointer`}
              >
                Entrar
              </h1>
            </div>
          </div>

          <div
            className={`bg-blue-400 ${
              open ? "w-[25%]" : "w-[19%]"
            } h-[55%]   rounded-[40px] absolute left-12 `}
          >
            <p
              className={`${
                open ? "text-2xl" : "text-[1.2rem]"
              } font-roboto text-white p-7 duration-0`}
            >
              Admin: user.getNome() <br />
              N° de membros: 4/5 <br />
              Dia: Terça <br />
              Horário: 19:00 <br />
              Local: Sala 1 <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupsBody;