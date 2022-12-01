import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";
import css from "../styles/Menu.module.css";

export default function Menu({ bocatas,bebidas,entrante }) {
  return (

    
    <div className={css.container}>
      <div className={css.heading}>
        <span id="bocadillos">Nuestro Menu</span>
        {/* Menu Bocadillos */}
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
                {bocata.price[1]}
                <span style={{ color: "var(--themeRed)" }}>€</span>{" "}
              </span>
            </div>
          );
        })}
      </div>

      <div className={css.heading}>
      <span id="entrantes"></span>
        {/* Menu Entrantes */}
        <span>Entrantes</span>
      </div>
      <div className={css.menu}>{
        entrante.map((entrante, id) => {
          const src = urlFor(entrante.image).url();
          return (
            <div className={css.bocata} key={id}>
              <Link href={`./bocata/${entrante.slug.current}`}>
                <div className={css.imageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt="entrante"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{entrante.name}</span>
              <span className={css.details}>{entrante.details}</span>
              <span>
                {entrante.price[1]}
                <span style={{ color: "var(--themeRed)" }}>€</span>{" "}
              </span>
            </div>
          );
        })}
      </div>

      <div className={css.heading}>
      <span id="bebidas"></span>
        {/* Menu Bebidas */}
        <span>Bebidas</span>
      </div>
      <div className={css.menu}>{
        bebidas.map((bebida, id) => {
          const src = urlFor(bebida.image).url();
          return (
            <div className={css.bocata} key={id}>
              <Link href={`./bebida/${bebida.slug.current}`}>
                <div className={css.imageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt="bebida"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{bebida.name}</span>
              <span className={css.details}>{bebida.details}</span>
              <span>
                {bebida.price[1]}
                <span style={{ color: "var(--themeRed)" }}>€</span>{" "}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}