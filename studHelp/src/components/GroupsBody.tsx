import React from 'react';

function GroupsBody() {
  return (
    <div className='mt-8 px-8 relative'>
      <div>
        <h1 className='text-5xl font-roboto'>
          Grupo da Disciplina:
        </h1>
      </div>
      <div className='h-[73vh] relative mt-10'>
        <div className='bg-blue-900 w-1/4 h-[50%] rounded-[40px] absolute top-3 '>
        </div>
        
        <div className='bg-blue-600 w-[24%] h-[49%] rounded-[40px] left-4 absolute'>
            <div className='relative'>
                <h1 className='top-[17rem] text-3xl absolute left-8 text-white hover:text-blue-300 hover:font-mediumbold font-roboto duration-300 cursor-pointer'>
                    Pedir para participar
                </h1>
            </div>
        </div>

        <div className='bg-blue-400 w-[24%] h-[40%] rounded-[40px] absolute left-4 '>
        </div>
      
      </div>
    </div>
  );
}

export default GroupsBody;
