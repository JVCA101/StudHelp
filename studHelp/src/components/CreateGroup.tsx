import React from 'react'

function CreateGroup() {
  return (
    <div className=' mt-[121px] cursor-pointer hover:underline'>
        <div className='flex gap-x-2'>
            <img src="./src/assets/plus 1.svg"/>
            <h1 className='text-2xl  font-roboto'>
                Iniciar novo grupo
            </h1>
        </div>
    </div>
  )
}

export default CreateGroup