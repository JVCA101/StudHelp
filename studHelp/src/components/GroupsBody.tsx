import React from 'react';

function GroupsBody() {
  return (
    <div className='mt-8 px-8 relative'>
      <div>
        <h1 className='text-4xl font-roboto'>
          Grupo da Disciplina:
        </h1>
      </div>
      <div className='relative h-96 mt-10 overflow-y-scroll'>
        <div className='bg-blue-900 w-[31%] h-[74%] rounded-[40px] absolute top-3 '>
        </div>
        
        <div className='bg-blue-600 w-[30%] h-[73%] rounded-[40px] left-4 absolute'>
            <div className='relative'>
                <h1 className='top-[14rem]  text-3xl absolute left-7 text-white hover:text-blue-300 hover:font-medium hover:text-[2.0rem] font-roboto duration-300 cursor-pointer'>
                    Pedir para participar
                </h1>
            </div>
        </div>

        <div className='bg-blue-400 w-[30%] h-[55%]   rounded-[40px] absolute left-4 '>
          <p className='text-2xl font-roboto text-white p-7'>
            Admin: user.getNome() <br />
            N° de membros: 4/5 <br />
            Dia: Terça <br />
            Horário: 19:00 <br />
            Local: Sala 1 <br />
          </p>
        </div>
      
      </div>
    </div>
  );
}

export default GroupsBody;
