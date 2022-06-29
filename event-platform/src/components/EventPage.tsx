import React from 'react'

export function EventPage() {
  return (
    <div className='flex flex-col flex-1 p-10 items-center'>
        <h1 className='text-center font-thin text-4xl'><span className='text-green-500 font-bold'>EVENT</span> Platform</h1>
        <div className='max-w-2xl'>
            <p className='mt-5 text-lg'>
                Seja bem vindo à <span className='font-thin text-lg ml-1 underline'><span className='text-green-500 font-bold'>EVENT</span>Platform</span>, 
                plataforma dedicada a pessoas que buscam avança para o próximo nível em React.
            </p>
            <p>
                Para iniciar seu aprendizado basta selecionar uma aula no menu à direita.
            </p>
            <p>Bons estudos!</p>
        </div>
    </div>
  )
}
