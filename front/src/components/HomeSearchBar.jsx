import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { set } from "date-fns";

const HomeSearchBar = ({ setViandas, viandas, filterViandas, viandasZonal }) => {
  const { SERVER } = useContext(GlobalContext);

const [viandasOriginal, setViandasOriginal] = useState([]);

  useEffect(() => {
    // viandas esta vacio 
    if (viandasOriginal.length === 0) {
      // console.log("viandas esta vacio");
      // console.log(viandas);
      setViandasOriginal(viandas);
      // console.log(viandasOriginal);
      return;
    }

  }, [viandas]);
console.log(viandasOriginal)
  const filterViandasold = (id) => {
    // Restaurar a la lista original si se selecciona "Todas"
    if (id === "0") {
      setViandas(originalViandas);
    } else {
      // Filtrar las viandas por tipo
      const viandasFiltradas = filterViandasold.filter((vianda) => vianda.tipoVianda_id == id);
      setViandas(viandasFiltradas);
    }
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    const id = e.target.tipoVianda.value;
    console.log(id);

    //fx traida del modalInicio
    // try {
    //   const res = await axios.get(
    //     `${SERVER}viandero/zona-reparto-viandas/${id}`
    //   );

    //   const vianderosPorZona = res.data;
    //   const viandasDeLaZona = vianderosPorZona.vianderos.reduce(
    //     (acc, viandero) => {
    //       // concatena viandas de todos los vianderos
    //       return acc.concat(viandero.viandas);
    //     },
    //     []
    //   );
    //   setViandas(viandasDeLaZona);
    //   localStorage.setItem("viandas", JSON.stringify(viandasDeLaZona));// A.u 

      
    // } catch (error) {
    //   console.error(error);
    // }

    //fx traida del modalInicio

    if (id !== "0") {
      const viandasFiltradas = viandasOriginal.filter(
        (vianda) => vianda.tipoVianda_id == id
      );
      setViandas(viandasFiltradas);
    } else {
      // setViandas(viandas);
      setViandas(viandasOriginal);
    }

    //  filterViandas(id);
    //  if (id === "0") {
    //   setViandas(viandas);
    // }
    // if (originalViandas.length === 0) {
    //   setOriginalViandas([...viandas]);
    //   setViandas(originalViandas)
    // }

    //----Filtrar viandas por tipo
    // if (id === "0") {
    //  setViandas(originalViandas);

    //   return;
    // }
    // console.log(originalViandas)
    //filtrar viandas por tipo
    // const viandasFiltradas = originalViandas.filter((vianda) => vianda.tipoVianda_id == id);

    // console.log(viandasFiltradas);
    // setViandas(viandasFiltradas);
    //----

    // try {
    //   if (id === "0") {
    //      const res = await axios.get(`${SERVER}viandas`);
    //     console.log(res.data);
    //     setViandas(res.data);
    //     return;
    //   }
    //    const res = await axios.get(`${SERVER}viandas/filtrar/${id}`);
    //   console.log(res.data.viandas.vianda);
    //   setViandas(res.data.viandas.vianda);
    // } catch (error) {
    //   console.log(error);
    // }
    //   //calcular cantidad de viandas por zona
  };
  return (
    <>
      <form
        onSubmit={handleSubmitSearch}
        className="max-w-full mt-8 h-50 md:h-auto w-full items-center justify-center text-center"
      >
        <div className="inline-flex md:flex-row gap-y-2 flex-col items-center text-gray-300 justify-between p-5 md:pl-5 md:pr-1 shadow md:border-2 h-full md:h-16 w-full py-1 md:rounded-full border-gray-500 dark:border-gray-200">
          <div className="flex justify-center md:border-0 md:rounded-none w-full md:w-1/2 h-full md:h-[60%] border-gray-900 rounded-full dark:border-white-ghost border md:mr-2 text-black dark:text-black-800">
            <input
              className="w-11/12 overflow-clip h-full placeholder:text-indigo-50 bg-transparent outline-none "
              placeholder="Cambiar Zona de entrega"
              readOnly
            />
          </div>
          <div className="flex justify-center w-full md:w-1/2 h-full md:h-[60%] border-gray-900 rounded-full dark:border-white-ghost border md:border-0 md:rounded-none md:border-l md:mr-2 text-black dark:text-white-ghost">
            <select
              name="tipoVianda"
              className="w-11/12 overflow-clip h-full placeholder:text-indigo-50  bg-transparent outline-none "
              placeholder="Tipo de viandas"
            >
              <option value="0">Todas</option>
              <option value="1">Tradicional</option>
              <option value="2">Vegetariana</option>
              <option value="3">Vegana</option>
              <option value="4">Sin TACC</option>
            </select>
          </div>

          <div className="flex space-x-12 items-center w-2/3 justify-center h-full ml-2 md:w-52 bg-orange-brand rounded-full">
            <button
              type="submit"
              className=" text-3xl font-medium text-gray-950 hover:text-white-ghost hover:bg-orange-brand rounded-full w-20 h-20 md:w-16 md:h-16 flex items-center justify-center"
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default HomeSearchBar;
