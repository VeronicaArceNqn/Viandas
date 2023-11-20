import React, { useEffect, useState } from "react";

const Ubicar = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [localidad, setLocalidad] = useState({});

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
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  useEffect(() => {
    if (latitude && longitude) getLocalidad(latitude, longitude);
  }, [latitude, longitude]);

  const getLocalidad = async (lati, longi) => {
    const url = `https://apis.datos.gob.ar/georef/api/ubicacion?lat=${lati}&lon=${longi}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.ubicacion);
    setLocalidad(data.ubicacion);
    //   console.log(localidad['municipio']['nombre'])
  };
  //   getLocalidad();

  //   console.log(localidad);

  return (
    <div>
      <h1>Tu ubicación actual:</h1>
      {latitude && longitude ? (
        <p>
          Latitud: {latitude}, Longitud: {longitude} <br />
          Provincia: {localidad.provincia?.nombre} <br />
          Departamento: {localidad.departamento?.nombre}
        </p>
      ) : (
        <p>Obteniendo ubicación...</p>
      )}
    </div>
  );
};

export default Ubicar;
