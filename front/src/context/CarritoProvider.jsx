
import { useReducer } from 'react';
import {CarritoContext} from './CarritoContext';

const initialState = []
export const CarritoProvider = ({children})=>{
    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
          case "[carrito] Agregar Compra":
            //logica para que si es de igual id, no lo agregra a la lista
            return [...state, action.payload];
          case "[carrito] aumentar cantidad ":        
            return state.map((item) => {
              const cant = item.cant + 1;
              if (item.id === action.payload) return { ...item, cantidad: cant };
              return item;
            });
          case "[carrito] disminuir compra":
            return state.map((item) => {
              const canti = item.cant - 1;
              if (item.id === action.payload && item.cant > 1)
                return { ...item, cant: canti };
              return item;
            });
            break;
          case "[carrito] quitar compra":
            return state.filter((compra) => compra.id !== action.payload);
          default:
            return state;
        }
      };

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = (compra) => {
        compra.cant = 1
        const action = {
          type: "[carrito] Agregar Compra",
          payload: compra,
        };
        dispatch(action);
      };
      const aumentarCompra = (id) => {
        const action = {
          type: "[carrito] aumentar cantidad ",
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


    return (
        <CarritoContext.Provider value={{
            listaCompras,
            agregarCompra,
            aumentarCompra,
            disminuirCompra,
            quitarCompra,
          }}>
            {children}
        </CarritoContext.Provider>
    )
}