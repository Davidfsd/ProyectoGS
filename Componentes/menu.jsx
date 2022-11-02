import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";
import css from "../styles/Menu.module.css";

export default function Menu({ pizzas }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span id="menu">Nuestro Menu</span>
        <span>Bocadillos</span>
      </div>
      <div className={css.menu}>{
        pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.imageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt="pizza"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{pizza.name}</span>
              <span className={css.details}>{pizza.details}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>$</span>{" "}
                    {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}