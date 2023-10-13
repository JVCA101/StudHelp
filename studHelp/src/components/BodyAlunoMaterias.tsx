import React from 'react';

function HeaderAluno(){
    return (
        <div className="px-8 font-roboto font-medium">
            <h1 className=' mt-8  text-[1.8rem]'>Minhas Disciplinas:</h1>

                <div className='bg-page-blue w-72 h-24 font-bold text-[1.5rem] rounded-[90px] mt-14'>
                    <h1 className='px-8 py-2'>user.getSubject(0)</h1>
                    <h1 className='px-8 text-[1.1rem]'>user.getSubject(0).getId()</h1>
                </div>
                <div className='bg-page-blue w-72 h-24 rounded-[90px] mt-16  font-bold text-[1.5rem]'>
                <h1 className='px-8 py-2'>user.getSubject(0)</h1>
                <h1 className='px-8 text-[1.1rem]'>user.getSubject(0).getId()</h1>
                </div>

            
        </div>
    )
}

export default HeaderAluno;