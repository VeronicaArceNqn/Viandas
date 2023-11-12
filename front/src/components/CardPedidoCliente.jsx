import React from 'react'
import "react-datepicker/dist/react-datepicker.css";

function CardPedidoCliente ({id, pedido_id, vianda_id, cantidad, precio }) {                     
           
return (
    <>
    <div>
        <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
            <div className="col-span-2 flex items-center gap-4">
                <img
                    src="https://img.freepik.com/foto-gratis/hombre-joven-hermoso-contento-camiseta-azul-que-senala-lado_1262-17845.jpg"
                    className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                    <h3 className="font-bold">Vianda_id {vianda_id}</h3>
                        <p className="text-gray-500">Pedido_id{pedido_id} </p> id: {id}
                </div>
            </div>
            <div>
                <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    cantidad {cantidad}
                </span>
            </div>
            <div>
                <span className="font-bold">$ {precio}</span>
            </div>
        </div>

        
    </div>
    </>
  )
}

export default CardPedidoCliente;

{/* <div className="mt-3 sm:max-w-xl sm:mx-auto rounded-2xl sm:rounded-full flex bg-indigo-50 border-4 border-indigo-700 flex-col sm:flex-row" id="widget">
        <div className="py-6 sm:rounded-l-full pr-10 relative rounded-xl mx-auto bg-white w-full sm:w-auto">
            
            <svg className="rounded-full w-28 h-28 object-cover border-indigo-200 border-4 relative left-8 sm:inline-block mx-auto 
             text-purple-500" viewBox="0 0 26 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg>
                <div className="bg-green-300 w-7 h-7 absolute rounded-full right-6 top-6 border-4 border-white"></div>
                
        </div>
        
        <div className="flex flex-col ml-2 p-4">
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold mt-2 mr-5">                
                    <span className="font-medium text-black text-md bg-indigo-200 py-1 px-2 rounded-md">
                        {nombreLugar}
                    </span>
                </h4>
            </div>
           <div className=" p-3 mr-5"> 
            <div className="mt-2 font text-gray-500">Calle: <span className="text-black">{calle}</span>{}</div>
            <div className="mt-2 font text-gray-500">Altura de calle: <span className="text-black">{nroCalle}</span>{}</div>
            
            <div className="mt-2 font text-gray-600">
            Ciudad: <span className="text-black">{ciudad}</span> 
            </div>
            <div className="font text-gray-500"> 
            Provincia: <span className="text-black">{provincia}</span> 
            </div>
            
            <div className=" relative right-6 top-6 "> 
                <button
                    onClick={handleDelete}                    
                    className=" p-2 mt-3 rounded-full hover:bg-red-300 transition-colors"
                   
                        >Borrar */}
                            {/* <svg class="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg> */}
                    
                {/* </button>
                
            </div>
            </div>
        </div>
        </div> */}