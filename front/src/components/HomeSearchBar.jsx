import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";


const HomeSearchBar = ({setViandas}) => {
  const {SERVER} = useContext(GlobalContext)
  // const [tv, setTv] = useState("");
  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    console.log(e.target.tipoVianda.value);
    const id =e.target.tipoVianda.value;
    
    try{
      const res = await axios.get(`${SERVER}viandas/filtrar/${id}`)
      console.log(res.data.viandas.vianda)
      setViandas(res.data.viandas.vianda)

    }catch(error){
      console.log(error)
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmitSearch(e)}
        className="max-w-full mt-8 h-50 md:h-auto w-full items-center justify-center text-center"
      >
        <div className="inline-flex md:flex-row gap-y-2 flex-col items-center text-gray-300 justify-between p-5 md:pl-5 md:pr-1 shadow md:border-2 h-full md:h-16 w-full py-1 md:rounded-full border-gray-500 dark:border-gray-200">
          <div className="flex justify-center w-full md:w-1/2 h-full md:h-[60%] border-gray-900 rounded-full dark:border-white-ghost border md:border-0 md:rounded-none md:border-r md:mr-2 text-black dark:text-white-ghost">
            <select
              name="tipoVianda"
              className="w-11/12 overflow-clip h-full placeholder:text-indigo-50  bg-transparent outline-none "
              placeholder="Tipo de viandas"
            >
              <option value="1">Tradicional</option>
                  <option value="2">Vegetariana</option>
                  <option value="3">Vegana</option>
                  <option value="4">Sin TACC</option>
              </select>
          
          </div>
          <div className="flex justify-center md:border-0 md:rounded-none w-full md:w-1/2 h-full md:h-[60%] border-gray-900 rounded-full dark:border-white-ghost border md:mr-2 text-black dark:text-black-400">
            <input
              className="w-11/12 overflow-clip h-full placeholder:text-indigo-50 bg-transparent outline-none "
              placeholder="Vianderos por zonas"
            />
          </div>
          <div className="flex space-x-12 items-center w-2/3 justify-center h-full ml-2 md:w-52 bg-orange-brand rounded-full">
            <button type="submit" className=" text-3xl font-medium text-white">
              Buscar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default HomeSearchBar;
