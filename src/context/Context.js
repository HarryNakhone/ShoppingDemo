import { createContext } from "react";
import cartReducer from "./CardReducer";
import { useReducer } from "react";

import { ADD_ITEM, DELETE_ITEM, SEARCH_ITEM } from "./Types";
export const ContextCart = createContext();

const Context = ({ children }) => {
  const initialState = {
    cartStorage: [],
    searchQuery: "",
  };

  const addToCart = (items) => {
    dispatch({ type: ADD_ITEM, heeload: items });
  };

  const deleteCart = (id) => {
    dispatch({ type: DELETE_ITEM, heeload: id });
  };

  const searchItem = (query) => {
    dispatch({ type: SEARCH_ITEM, payload: query });
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  return (
    <ContextCart.Provider
      value={{
        cartItem: cartState.cartStorage,
        addToCart,

        deleteCart,
        searchItem,
        Queries: cartState.searchQuery,
      }}
    >
      {children}
    </ContextCart.Provider>
  );
};

export default Context;
