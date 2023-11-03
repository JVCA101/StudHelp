function BodyAlunoGrupos() {
  return (
    <div className='h-auto'>
        <div>
            <h1 className='mt-10  text-[1.8rem] font-roboto font-medium'>
                Meus Grupos:
            </h1>
        </div>
        <div className='hover:overflow-x-scroll py-4'>
            <div className='h-52 rounded-[50px] mt-7 w-[25%] bg-blue-900 text-[1.2rem] text-white'>
                <div>
                    <h1 className='flex justify-center items-center relative py-1'>
                        Disciplina: XXXXX <br />
                        Código: XXXXX
                    </h1>
                    <p className='px-4 '>
                        Dia: XXXXXX <br />
                        Horario: XX:XX <br />
                        Local: XXXXXX <br />
                        Admin: XXXXXX <br />
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default BodyAlunoGrupos