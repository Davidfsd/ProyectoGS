import Image from "next/image";
import Layout from "../../Componentes/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Pizza.module.css";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";


// Codigo Cliente
export default function Pizza({ pizza }) {
  const [Quantity, setQuantity] = useState(1);
  const [Size, setSize] = useState(1);
  const src = urlFor(pizza.image)?.url();

  const handleQuan = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({ ...pizza, price: pizza.price[Size], quantity: Quantity, size: Size });
    toast.success("Añadido al carrito");
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt="pizza"
            objectFit="cover"
            layout="fill"
            unoptimized
          />
        </div>

        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>
            <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
            {pizza.price[Size]}
          </span>

          {/* Tamaño */}
          <div className={css.size}>
            <span>Tamaño</span>
            <div className={css.sizeVariants}>
              <div className={Size === 0 ? css.selected : ""} onClick={() => setSize(0)}>
                Pequeño
              </div>
              <div className={Size === 1 ? css.selected : ""} onClick={() => setSize(1)}>
                Mediano
              </div>
              <div className={Size === 2 ? css.selected : ""} onClick={() => setSize(2)}>
                Grande
              </div>
            </div>
          </div>

          {/* Contador Cantidad */}
          <div className={css.quantity}>
            <span>Cantidad</span>
            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuan("dec")}
              />
              <span>{Quantity}</span>
              <Image
                src={RightArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuan("inc")}
              />
            </div>
          </div>

          {/* Boton Añadir Carrito*/}
          <div className={`btn ${css.btn}`} onClick={addToCart}>
            Añadir al carrito
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}

// Codigo Servidor
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(`
    *[_type == "pizza" && slug.current == '${slug}'][0]
  `);
  return {
    props: {
      pizza,
    },
  };
}