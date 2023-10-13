import React from 'react';

function LoginPage() {
    const handleClick = () => {
        window.location.href = "/aluno";
    }
    
    return (
        <div className='bg-blue-100 w-screen h-screen flex justify-center items-center relative'>
            <div className='text-center bg-gray-200 h-[30%] w-[25%] rounded-[30px]'>
                <h1 className='text-3xl font-roboto font-bold mb-4 mt-6'>Login</h1>
                <div className='mb-4 px-10'>
                    <input type="text" placeholder='Matrícula' className='block w-full p-2 border border-gray-300 rounded' />
                </div>
                <div className='mb-4 px-10'>
                    <input type="text" placeholder='Senha' className='block w-full p-2 border border-gray-300 rounded' />
                </div>
                <button className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-green-500' onClick={handleClick}>
                    Entrar
                </button>
            </div>
            <div className='absolute top-[22%] left-[50%] transform -translate-x-1/2 text-5xl font-roboto font-extrabold'>
                <h1 className=''>Bem-vindo ao StudHelp!</h1>
            </div>
        </div>
    );
}

export default LoginPage;
