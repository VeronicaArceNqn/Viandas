import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { set } from "date-fns";
import { format } from "date-fns";
import '../App.css'

const HomeSearchBar = ({ setViandas, viandas, filterViandas, viandasZonal }) => {
  const { SERVER } = useContext(GlobalContext);
  const [viandasOriginal, setViandasOriginal] = useState([]);
  const fecha = format(new Date(), "dd-MM-yyyy");
  
//   useEffect(() => {
//     // viandas esta vacio 
//     if (viandasOriginal.length === 0) {
//        console.log("viandasOriginal esta vacio");
     
//       setViandasOriginal([...viandas]);
      
//       return;
//     }

//   }, [viandas, viandasOriginal]);
// console.log(viandasOriginal)
console.log(viandas)
  

  const handleSubmitSearch = async (e) => {
    // e.preventDefault();
    // const id = e.target.tipoVianda.value;
    const id = e.target.value;
    console.log(id);  
    filterViandas(id); 

    // if (id !== "0") {
    //   const viandasFiltradas = viandasOriginal.filter(
    //     (vianda) => vianda.tipoVianda_id == id
    //   );
    //   setViandas([...viandasFiltradas]);
    // } else {
    //   // setViandas(viandas);
    //   setViandas([...viandasOriginal]);
    // }

  };
  return (
    <>
      <form

        // onSubmit={handleSubmitSearch}
        className="max-w-full mt-5 h-50 md:h-auto w-full items-center justify-center text-center"

//         onSubmit={handleSubmitSearch}
//         className="max-w-full mt-5 h-50 md:h-auto w-full items-center justify-center text-center"

      >
        <div className="inline-flex md:flex-row gap-y-2 flex-col items-center text-gray-300 font-bold justify-between p-5 md:pl-5 md:pr-1 shadow md:border-2 h-full md:h-16 w-full py-1 md:rounded-full border-gray-500 dark:border-gray-200 bg-gray-500">
          <div className="flex justify-center md:border-0 md:rounded-none w-full md:w-1/2 h-full md:h-[60%] border-gray-900 rounded-full dark:border-white-ghost border md:mr-2 text-black dark:text-black-800">
            <input

              className="w-1/4 overflow-clip h-full placeholder:text-gray-100 bg-transparent outline-none  "

              placeholder={fecha}
              readOnly
            />
          </div>
          <div className="flex justify-center w-full md:w-1/2 h-full md:h-[60%] border-gray-900 rounded-full dark:border-white-ghost border md:border-0 md:rounded-none md:border-l md:mr-2 text-black dark:text-white-ghost">
            <select 
              name="tipoVianda"

              className="w-11/12 overflow-clip h-full   bg-transparent outline-none "

              placeholder="Tipo de viandas"
              onChange={handleSubmitSearch}
            >
              <option value="0">Todos los tipos de viandas</option>
              <option value="1">Tradicional</option>
              <option value="2">Vegetariana</option>
              <option value="3">Vegana</option>
              <option value="4">Sin TACC</option>
            </select>
          </div>

          {/* <div className="flex space-x-12 items-center w-2/3 justify-center h-full ml-2 md:w-52 bg-orange-brand rounded-full">
            <button
              type="submit"
              className=" w-11/12 h-full text-white font-bold rounded-full  outline-none bg-gray-600 border-l-2 border-gray-6"
            >
              Buscar
            </button>
          </div> */}
        </div>
      </form>
    </>
  );
};

export default HomeSearchBar;
