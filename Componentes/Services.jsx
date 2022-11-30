import Image from "next/image";
import css from "../styles/Services.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import { UilSearchAlt } from "@iconscout/react-unicons";


export default function Services() {
  return (
    <>
    <div className={css.contenedor}>
      <div className={css.Buscar}>
            <div className={css.localiza}>
              ¿Como vá tu pedido?
            </div>   
            <div className={css.introduce}>
              Introduce tu numero de pedido
            </div>          
            <div className={css.divBuscar}>
              <input className={css.input} type="text" name="buscarPedido" placeholder="ej. 123456789"/>
              <div className={css.lupa}><UilSearchAlt/>  </div>
                   
            </div>
      </div>
      </div>

      <div className={css.heading}>
        <span>QUE SERVIMOS?</span>
        <span>Tu comida favorita</span>
        <span>Delivery Partner</span>
      </div>

      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s1} alt="s1" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Pedido fácil</span>
          <span>Solo necesitas unos pocos pasos para realizar el pedido</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s2} alt="s1" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Entrega rápida</span>
          <span>Entrega más que rapida, siempre ha tiempo</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s3} alt="s1" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Calidad</span>
          <span>No solo es rápido, la calidad tambien nos importa</span>
        </div>
      </div>
    </>
  );
}
