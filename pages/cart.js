import Image from "next/image";
import Layout from "../componentes/Layout";
import { urlFor } from "../lib/client";
import { useStore } from "../store/store";
import css from "../styles/Cart.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../componentes/OrderModal";
import { useRouter } from "next/router";

// import getStripe from "../lib/stripePromise";
export default function Cart() {
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const [PaymentMethod, setPaymentMethod] = useState(null);
  const [Order, setOrder] = useState(
    typeof window !== "undefined" && localStorage.getItem("order")
  );
    const router = useRouter()
  // Remove Pizza from zustand store
  const handleRemove = (index) => {
    removePizza(index);
    toast.error("Item removed");
  };
  // Calculat total
  const total = () =>
    CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);


  const handleOnDelivery = ()=> {

    typeof window !== "undefined" && localStorage.setItem('total', total())
    setPaymentMethod(0);
  }
    // Stripe Payment
  const handleCheckout = async () => {
    typeof window !== "undefined" && localStorage.setItem('total', total())
    setPaymentMethod(1)
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CartData.pizzas),
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
                <th>Pizza</th>
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={css.tbody}>
              {CartData.pizzas.length > 0 &&
                CartData.pizzas?.map((pizza, i) => {
                  const src = urlFor(pizza.image).url();
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
                      <td>{pizza.name}</td>
                      <td>
                        {pizza.size === 0
                          ? "Small"
                          : pizza.size === 1
                          ? "Medium"
                          : "Large"}
                      </td>
                      <td>{pizza.price}</td>
                      <td>{pizza.quantity}</td>
                      <td>{pizza.price * pizza.quantity}</td>
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
              <span>Items</span>
              <span>{CartData.pizzas.length}</span>
            </div>
            <div>
              <span>Total</span>
              <span>$ {total()}</span>
            </div>
          </div>
          {!Order && CartData.pizzas.length ? (
            <div className={css.buttons}>
              <button className={`btn`} onClick={handleOnDelivery}>
                Pay on Delivery
              </button>
              <button className={`btn`} onClick={handleCheckout}>Pay Now</button>
            </div>
          ) : null}
        </div>
      </div>
      <Toaster />

      {/* Model for Cash delivery */}
      <OrderModal
        opened={PaymentMethod === 0}
        setOpened={setPaymentMethod}
        PaymentMethod = {PaymentMethod}
      />
    </Layout>
  );
}
