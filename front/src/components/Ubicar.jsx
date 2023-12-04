import React, { useEffect, useState,useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Ubicar = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [localidad, setLocalidad] = useState({});
  const { setLocalidadProv } = useContext(GlobalContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);

          //   console.log(object)
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geo:: no soporta  su navegador.");
    }
  }, []);
  useEffect(() => {
    if (latitude && longitude) getLocalidad(latitude, longitude);
  }, [latitude, longitude]);

  const getLocalidad = async (lati, longi) => {
    const url = `https://apis.datos.gob.ar/georef/api/ubicacion?lat=${lati}&lon=${longi}`;
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.ubicacion);
    setLocalidad(data.ubicacion);
    setLocalidadProv(data.ubicacion);
    //   console.log(localidad['municipio']['nombre'])
  };
  //   getLocalidad();

  //   console.log(localidad);

  return (
    <div>
      {/* <h1>Tu ubicación actual:</h1> */}
      {latitude && longitude ? (
        <>
          {/* Latitud: {latitude}, Longitud: {longitude} <br /> */}
          {/* <p>Provincia: <span className="text-red-300">{localidad.provincia?.nombre}</span> </p> <br /> */}
         {/* <p> Dpto: <span className="text-red-300">{localidad.departamento?.nombre}</span> </p> <br /> */}
        </>
      ) : (
        <p>Obteniendo ubicación...</p>
      )}
    </div>
  );
};

export default Ubicar;
