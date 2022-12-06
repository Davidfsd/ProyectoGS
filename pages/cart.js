import Image from "next/image";
import Layout from "../componentes/Layout";
import { urlFor } from "../lib/client";
import { useStore } from "../store/store";
import css from "../styles/cart.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../componentes/OrderModal";
import { useRouter } from "next/router";

export default function Cart() {
  const CartData = useStore((state) => state.cart);
  const removeBocata = useStore((state) => state.removeBocata);
  const [PaymentMethod, setPaymentMethod] = useState(null);
  const [Order, setOrder] = useState(
    typeof window !== "undefined" && localStorage.getItem("order")
  );

  const router = useRouter()

  // Eliminar Item del carrito
  const handleRemove = (index) => {
    removeBocata(index);
    toast.error("Unidad Eliminada");
  };

  // Calcular total
  const total = () =>
    CartData.bocatas.reduce((a, b) => a + b.quantity * b.price, 0);

  // Contrareembolso Pago
  const handleOnDelivery = ()=> {
    typeof window !== "undefined" && localStorage.setItem('total', total())
    setPaymentMethod(0);
  }

  // Stripe Pago online
  const handleCheckout = async () => {
    typeof window !== "undefined" && localStorage.setItem('total', total())
    setPaymentMethod(1)
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CartData.bocatas),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading("Redirecting...");
    router.push(data.url);
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Tamaño</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={css.tbody}>
              {CartData.bocatas.length > 0 &&
                CartData.bocatas?.map((bocata, i) => {
                  const src = urlFor(bocata.image).url();
                  return (
                    <tr key={i}>
                      <td className={css.imageTd}>
                        <Image
                          loader={() => src}
                          src={src}
                          alt=""
                          objectFit="cover"
                          height={85}
                          width={85}
                        />
                      </td>
                      <td>{bocata.name}</td>
                      <td>
                        {bocata.size === 0
                          ? "Small"
                          : bocata.size === 1
                          ? "Medium"
                          : "Large"}
                      </td>
                      <td>{bocata.price}</td>
                      <td>{bocata.quantity}</td>
                      <td>{bocata.price * bocata.quantity}</td>
                      <td>
                        <span
                          style={{
                            color: "var(--themeRed)",
                            cursor: "pointer",
                          }}
                          onClick={() => handleRemove(i)}
                        >
                          x
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className={css.cart}>
          <span>Cart</span>
          <div className={css.details}>
            <div>
              <span>Unidades</span>
              <span>{CartData.bocatas.length}</span>
            </div>
            <div>
              <span>Total</span>
              <span>{total()}€</span>
            </div>
          </div>
          {!Order && CartData.bocatas.length ? (
            <div className={css.buttons}>
              <button className={`btn`} onClick={handleOnDelivery}>Pagar en entrega</button>
              <button className={`btn`} onClick={handleCheckout}>Pagar ahora</button>
            </div>
          ) : null}
        </div>
      </div>
      <Toaster />

      {/* Modelo para entrega de efectivo */}
      <OrderModal
        opened={PaymentMethod === 0}
        setOpened={setPaymentMethod}
        PaymentMethod = {PaymentMethod}
      />
    </Layout>
  );
}
