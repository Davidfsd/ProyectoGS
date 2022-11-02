import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  
  (set) => ({
    // Carrito
    cart: {
      pizzas: [],
      quantity: 0,
      total: 0,
    },
    addPizza: (data) =>
      set((state) => ({
        cart: {
          pizzas: [...state.cart.pizzas, data],
        },
      })),
    removePizza: (index) =>
      set((state) => ({
        cart: { pizzas: state.cart.pizzas.filter((_, i) => i != index) },
      })),
    resetCart: () =>
      set(() => ({
        cart: {
          pizzas: [],
          quantity: 0,
          total: 0,
        },
      })),

    // Pedidos
    order: "",
    addOrder: (id) => {
      set(() => ({
        order: id,
      }));
    },
    resetOrder: () => {
      set(() => ({
        order: "",
      }));
    },

    // Restablecer Store
    resetStore:()=> {
      set(()=> (
        {
          cart: {
            pizzas: [],
            quantity: 0,
            total: 0,
          },
          order: ""
        }
      ))
    }
  }),
);
