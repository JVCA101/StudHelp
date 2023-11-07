function HeaderAluno() {
  return (
    <div className="font-roboto font-medium text-blue-900">
      <div className="py-4 hover:overflow-x-scroll">
        <h1 className=" mt-4  text-[1.8rem]">Minhas Disciplinas:</h1>

        <div className="text-white">
          <div className="bg-blue-900 w-1/4 h-24 text-[1.5rem] rounded-[90px] mt-7">
            <h1 className="px-8 py-2 ">user.getSubject(0)</h1>
            <h1 className="px-8 text-[1.1rem] ">user.getSubject(0).getId()</h1>
          </div>
          <div className="bg-blue-900 w-1/4 h-24 rounded-[90px] mt-8 text-[1.5rem]">
            <h1 className="px-8 py-2 ">user.getSubject(0)</h1>
            <h1 className="px-8 text-[1.1rem] ">user.getSubject(0).getId()</h1>
          </div>
        </div>
      </div>

      <div className="flex mt-7 w-fit   text-[1.2rem] text-blue-400 cursor-pointer gap-x-64 px-8">
        <h1 className=" hover:text-blue-900 gap-x-10">
          Consultar grade do curso
        </h1>
        <h1 className=" hover:text-blue-900 ">
          Consultar Disciplianas Recomendadas
        </h1>
      </div>
    </div>
  );
}

export default HeaderAluno;
