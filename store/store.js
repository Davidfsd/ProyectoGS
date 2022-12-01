import create from "zustand";

export const useStore = create(
  
  (set) => ({
    // Carrito
    cart: {
      bocatas: [],
      quantity: 0,
      total: 0,
    },
    addBocata: (data) =>
      set((state) => ({
        cart: {
          bocatas: [...state.cart.bocatas, data],
        },
      })),
    removeBocata: (index) =>
      set((state) => ({
        cart: { bocatas: state.cart.bocatas.filter((_, i) => i != index) },
      })),
    resetCart: () =>
      set(() => ({
        cart: {
          bocatas: [],
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
            bocatas: [],
            quantity: 0,
            total: 0,
          },
          order: ""
        }
      ))
    }
  }),
);
