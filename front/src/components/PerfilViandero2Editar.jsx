import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

const PerfilViandero2Editar = ({viandero, setEditing }) => {
  const { user, SERVER, setViandero, getViandero } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [zonaReparto, setZonaReparto] = useState([]);

  useEffect(() => {
    axios
      .get(`${SERVER}zonaReparto`)
      .then((response) => {
        setZonaReparto(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener opciones:", error);
      });
  }, [SERVER]);

  const [formData, setFormData] = useState({
    id: viandero.id,
    user_id: viandero.user_id,
    descripcion: viandero.descripcion || '',
    zonaReparto_id: viandero.zonaReparto_id || '',
    logo: viandero.logo || '',
    descripPago: viandero.descripPago || '',
  });

  // useEffect(() => {
  //   // Mostrar los datos actuales del viandero en los campos del formulario
  //   if (viandero) {
  //     setFormData({
  //       id:viandero.id,
  //       user_id: viandero.user_id,
  //       descripcion: viandero.descripcion || '',
  //       zonaReparto_id: viandero.zonaReparto_id || '',
  //       logo: viandero.logo || '',
  //       descripPago: viandero.descripPago || '',
  //     });
  //   }
  //   console.log("viand",viandero)
  // }, [viandero]);

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveClick = async (e) => {
    e.preventDefault(); // Evitar la acción por defecto del formulario
    try {
      const response = await axios.put(`${SERVER}viandero/${formData.id}`, formData);

      console.log("Respuesta del servidor:", response.data);
      setViandero(response.data.viandero); // Actualizar viandero con la respuesta
      setEditing(false);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  console.log("FormData:", formData);

  return (
    <>
      <form className="flex flex-col gap-2 " onSubmit={handleSaveClick}>
        {/* Campos de edición */}
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-indigo-500 outline-none focus:outline-none text-white">
            <div className="flex items-center justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
              <h2 className="text-2xl text-white">Editar Perfil del viandero</h2>
            </div>

            <div className="relative p-6 flex-auto">
              <p className="my-4 leading-relaxed">
                Esta sección mostrará a tus potenciales clientes lo que describas de ti y tus viandas
              </p>
              
              <label htmlFor="descripcion" className="text-gray-100">
              Descripcion:
              </label>
              <input
                type="text"
                name="descripcion"
                className="block p-2.5 w-full mt-2 mb-2 text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Hola! Mi nombre es... Me dedico a la elaboración de... etc."
                value={formData.descripcion}
                onChange={handleInputChange}
              />
              <label htmlFor="zonaEntrega" className="text-gray-100">
                      Zona de entrega
                </label>
                <select
                    name="zonaReparto_id"
                    className="w-full py-2 px-4 dark:bg-indigo-400  border rounded-full mt-2 mb-4 outline-none focus:border-indigo-400 text-black"
                    placeholder="Eliga una direccion"
                    onChange={handleInputChange}
                    value={formData.zonaReparto_id}
                    >
                    <option value={""}>
                        Selecione una zona a entregar su vianda
                    </option>
                      {zonaReparto.map((zona) => (
                        <option key={zona.id} value={zona.id}>
                          {zona.nombreZona}
                        </option>
                      ))}
                </select>
                
                <label htmlFor="descripPago" className="text-gray-100">
                Detallar al cliente las formas de pago

          
            

                </label>

                
                <input
                  type="text"
                  name="descripPago"
                  className="block p-2.5 mt-2 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ejemplo: El pago será al momento de la entrega, con efectivo, mercado pago o transferencia"
                  value={formData.descripPago}
                  onChange={handleInputChange}
                />
              <button
                className="text-gray-100 w-72 bg-indigo-700 p-2 mt-8 rounded-full hover:bg-indigo-800 transition-colors"
                type="submit"
                
              >
                Guardar
              </button>
              {/* Botón para salir */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PerfilViandero2Editar;
