import Image from "next/image";
import css from "../styles/Services.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

export default function Services() {
  return (
    <>
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
