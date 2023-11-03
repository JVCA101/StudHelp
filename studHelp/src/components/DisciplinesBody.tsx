function DisciplinesBody() {
  
  return (
    <div>
        <div className='px-8 mt-4 font-roboto flex text-4xl gap-x-52'>
            <h1 className='font-bold text-blue-950'>
               Disciplina: subject.toSting()
            </h1>
            <h2 className='font-bold text-blue-950'>
            Código:subject.getID() 
            </h2>
        </div>
        <div className='px-8 text-2xl mt-12 font-roboto'>
          
          <div className='flex gap-x-10'>
            <h1>
              Os alunos consideram essa disciplina:
            </h1>
            <p className='text-green-400 font-bold'>Fácil</p>
            <p className='text-yellow-300 font-bold'>Moderada</p>
            <p className='text-red-500 font-bold'>Difícil</p>
          </div>
          <h2 className='py-12'>
            Pré-requisito: subject.getPreRequisito()
          </h2>
          <h3>
            Matérias Dependentes: subject.getDependentes()
          </h3>
        </div>
    </div>
  )
}

export default DisciplinesBody