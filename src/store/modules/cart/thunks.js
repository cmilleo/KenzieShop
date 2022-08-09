import { addCart, removeCart } from "./actions";
import { toast } from "react-toastify";

export const addCartThunk = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState();
    if (!cart.every((prod) => prod.name !== product.name)) {
      toast.error("Item já adicionado");
      return;
    }
    toast.success("Produto adicionado ao carrinho");
    const list = JSON.parse(localStorage.getItem("cart")) || [];

    list.push(product);
    localStorage.setItem("cart", JSON.stringify(list));

    dispatch(addCart(product));
  };
};

export const removeCartThunk = (product) => {
  return (dispatch, getState) => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.filter((e) => e.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Produto removido com sucesso!");
    dispatch(removeCart(product));
  };
};
