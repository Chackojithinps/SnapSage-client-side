import React from 'react'

function ProfileNav() {
    return (
        <>  
        <div className='flex'>
            <div class="flex border border-red-500 flex-wrap">
                <div class="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden">
                    <nav>
                        <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                            <i class="fas fa-home mr-2"></i>Inicio
                        </a>
                        <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                            <i class="fas fa-file-alt mr-2"></i>Autorizaciones
                        </a>
                        <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                            <i class="fas fa-users mr-2"></i>Usuarios
                        </a>
                        <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                            <i class="fas fa-store mr-2"></i>Comercios
                        </a>
                        <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                            <i class="fas fa-exchange-alt mr-2"></i>Transacciones
                        </a>
                    </nav>
                </div>
            </div>

             <div>
                image
             </div>
        </div>
        </>
    )
}

export default ProfileNav
