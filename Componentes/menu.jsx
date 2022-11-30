import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";
import css from "../styles/Menu.module.css";

export default function Menu({ bocatas }) {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span id="menu">Nuestro Menu</span>
        <span>Bocadillos</span>
      </div>
      <div className={css.menu}>{
        bocatas.map((bocata, id) => {
          const src = urlFor(bocata.image).url();
          return (
            <div className={css.bocata} key={id}>
              <Link href={`./bocata/${bocata.slug.current}`}>
                <div className={css.imageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt="bocata"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{bocata.name}</span>
              <span className={css.details}>{bocata.details}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>€</span>{" "}
                    {bocata.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}