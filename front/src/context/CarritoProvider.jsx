import { useContext, useReducer, useState } from "react";
import { CarritoContext } from "./CarritoContext";
import { stepButtonClasses } from "@mui/material";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import Swal from "sweetalert2";
import { set } from "date-fns";

const initialState = [];
// const{SERVER} = useContext(GlobalContext)
export const CarritoProvider = ({ children }) => {
  //
  const [loadingAdd, setLoadingAdd] = useState(false);
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[carrito] agregar compra":        
        setLoadingAdd(true);
        // console.log(loadingAdd)
        
        try {
          axios
            .post(`http://localhost:8000/api/actualizarCarrito/${action.payload.id}?_method=PATCH`,{accion: "aumentar"})
            .then((res) => {
              console.log(res);
              setLoadingAdd(false);
            })
            .catch((err) => {
              console.log(err.response.status);
              setLoadingAdd(false);
              if (err?.response?.status == 500) {
                // alert(err.response.status)
                Swal.fire("sin stock");
                return state;
              } else {
                return [...state, action.payload]; // al array existe le agrega el nuevo item completo
              }
            });
        } catch (error) {
          console.log(error);
        }
        // setLoadingAdd(false);
        return [...state, action.payload]; // al array existe le agrega el nuevo item completo

      //logica para que si es de igual id, no lo agregra a la lista

      case "[carrito] aumentar cantidad":
        //obtener item que se esta aumentado la cantidad
        const itemm = state.find((item) => item.id ===  action.payload); //buscar el item en abj carrito que tenga el mismo id que el action.payload
        console.log(itemm)
        if (!itemm) return state;
        //relizar peticion backend

        try{
          axios
          .post(
            `http://localhost:8000/api/actualizarCarrito/${itemm.id}?_method=PATCH`,
            { accion: "aumentar" }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            // console.log(err.response.status);
            if (err?.response?.status == 500) {
              // alert(err.response.status)
              Swal.fire("sin stock");
              return state;
            } else {
              return state.map((item) => {
                if (item.id === action.payload)
                  return { ...item, cant: item.cant + 1 };
                return item;
              });
            }
          });
        }catch(error){
          console.log(error)
        }
        return state.map((item) => {
          if (item.id === action.payload)
            return { ...item, cant: item.cant + 1 };
          return item;
        });
      // return state.map((item) => {
      // const cant = item.cant + 1;
      //descontar stock con axios put
      // const data = {
      //   stock: item.stock - 1,
      // };
      // axios.put(`${SERVER}viandas/${item.id}`, data);

      // if (item.id === action.payload ) return { ...item, cant: cant };
      // return item;
      // });
      case "[carrito] disminuir compra":
        //obtener item que se esta disminuir la cantidad
        const iteem = state.find((item) => item.id === action.payload); //buscar el item en abj carrito que tenga el mismo id que el action.payload
        if (!iteem) return state;
        //relizar peticion backend
        try{

          axios
            .post(
              `http://localhost:8000/api/actualizarCarrito/${iteem.id}?_method=PATCH`,
              { accion: "disminuir" }
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
               console.log(err);
              if (err?.response?.status == 500) {
                // alert(err.response.status)
                Swal.fire("error al disminuir");
                return state;
              } 
            });
          }catch(error){
            console.log(error)
          }
          return state.map((item) => {
            const canti = item.cant - 1;
            if (item.id === action.payload && item.cant > 1)
              return { ...item, cant: canti };
            return item;
          });
        // return state.map((item) => {
        //   const canti = item.cant - 1;
        //   if (item.id === action.payload && item.cant > 1)
        //     return { ...item, cant: canti };
        //   return item;
        // });
      // break;
      case "[carrito] quitar compra":
        console.log(action)
        try {
          axios
            .post(`http://localhost:8000/api/actualizarCarrito/${action.payload}?_method=PATCH`,{accion: "disminuir"})
            .then((res) => {
              console.log(res);
              setLoadingAdd(false);
            })
            .catch((err) => {
              console.log(err);
              setLoadingAdd(false);
              if (err?.response?.status == 500) {
                // alert(err.response.status)
                Swal.fire("sin stock");
                return state;
              } else {
                return [...state, action.payload]; // al array existe le agrega el nuevo item completo
              }
            });
        } catch (error) {
          console.log(error);
        }
        // setLoadingAdd(false);
        return state.filter((compra) => compra.id !== action.payload);
        // return [...state, action.payload]; 

      //
        // return state.filter((compra) => compra.id !== action.payload);
      case "[carrito] vaciar carrito":
        return action.payload;

      default:
        return state;
    }
  };

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    // console.log(compra);
    compra.cant = 1;// se crea esta variable para contar cant en el carrito
    const action = {
      type: "[carrito] agregar compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCompra = (id) => {
    const action = {
      type: "[carrito] aumentar cantidad",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCompra = (id) => {
    const action = {
      type: "[carrito] disminuir compra",
      payload: id,
    };
    dispatch(action);
  };

  const quitarCompra = (id) => {
    const action = {
      type: "[carrito] quitar compra",
      payload: id,
    };
    dispatch(action);
  };

  //vaciar carrito
  const vaciarCarrito = () => {
    const action = {
      type: "[carrito] vaciar carrito",
      payload: [],
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider
      value={{
        loadingAdd,
        listaCompras,
        agregarCompra,
        aumentarCompra,
        disminuirCompra,
        quitarCompra,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
