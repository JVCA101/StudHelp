function SearchDisciplinesHeader() {
  return (
    <div className='mt-[90px] px-8 font-roboto'>
      <div>
        <h1 className='text-2xl font-roboto select-none'>
          Buscar Disciplina:
        </h1>
      </div>
      <div className='flex gap-x-1'>
        <input type="text" placeholder='Insira código da disciplina' className='text-[1.2rem] border px-2 bg-neutral-100 border-black block w-[50%]' />
        <img src={`./src/assets/search 1.svg`}  className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default SearchDisciplinesHeader