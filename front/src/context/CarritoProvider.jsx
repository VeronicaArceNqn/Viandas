import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";
import { stepButtonClasses } from "@mui/material";
import axios from "axios";

const initialState = [];
export const CarritoProvider = ({ children }) => {
  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[carrito] agregar compra":
        //
        // console.log(action.payload)
        return [...state, action.payload];

      //logica para que si es de igual id, no lo agregra a la lista

      case "[carrito] aumentar cantidad":
        return state.map((item) => {
          const cant = item.cant + 1;
          //descontar stock con axios put
          // const data = {
          //   stock: item.stock - 1,
          // };
          // axios.put(`${SERVER}viandas/${item.id}`, data);

          if (item.id === action.payload ) return { ...item, cant: cant };
          return item;
        });
      case "[carrito] disminuir compra":
        return state.map((item) => {
          const canti = item.cant - 1;
          if (item.id === action.payload && item.cant > 1)
            return { ...item, cant: canti };
          return item;
        });
      // break;
      case "[carrito] quitar compra":
        return state.filter((compra) => compra.id !== action.payload);
      case "[carrito] vaciar carrito":
        return action.payload;
        
      default:
        return state;
    }
  };
  

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    // console.log(compra);
    compra.cant = 1;
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
  }


  

  return (
    <CarritoContext.Provider
      value={{
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
