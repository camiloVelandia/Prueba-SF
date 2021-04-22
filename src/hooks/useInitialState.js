import { useState } from "react";
import initialState from "../initialState";

// Hook to use the app state
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const { cart } = state;
    const itemExist = cart.some((product) => product.id === payload.id);
    if (itemExist) {
      const consolidatedCart = cart.map((product) => {
        if (product.id === payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return { ...product };
      });
      setState((prev) => ({
        ...prev,
        cart: [...consolidatedCart],
      }));
    } else {
      setState((prev) => ({
        ...prev,
        cart: [...prev.cart, { ...payload, quantity: 1 }],
      }));
    }
  };

  const removeFromCart = (payload) => {
    const { quantity, id } = payload;
    if (quantity > 1) {
      setState((prev) => ({
        ...prev,
        cart: prev.cart.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return { ...product };
        }),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        cart: prev.cart.filter((item) => item.id !== id),
      }));
    }
  };

  const removeItemFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    addToCart,
    removeFromCart,
    removeItemFromCart,
    state,
  };
};

export default useInitialState;
