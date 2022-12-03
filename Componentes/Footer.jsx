import css from "../styles/Footer.module.css"
import Logo from "../assets/Logo.png"
import Image from "next/image";
import { UilInstagram, UilFacebook, UilTwitter } from '@iconscout/react-unicons'
import Link from "next/link";

export default function Footer() {
  return (
    
    <div className={css.container}>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={90} height={90}/>
        <span className={css.namelogo}>BocAxo</span>
      </div>
      <div className={css.centrarFooter}>
        <span className={css.titulo}>Sobre nosotros</span>
          <Link href="../quienesSomos">Quienes somos</Link>

          <span>Trabaja con nosotros</span>
          <span>Contacto</span>
      </div>
      <div>
        <span className={css.titulo}>Síguenos</span>
        <div className={css.redes}>
          <Link href="http://www.facebook.es"><UilFacebook size='40'/></Link>
          <Link href="https://twitter.com/"><UilTwitter size='40'/></Link>
          <Link href="https://www.instagram.com/"><UilInstagram size='40'/></Link>
        </div>
      </div>
      <div className={css.centrarFooter}>
        <Link href="../cookies">CONDICIONES DE USO</Link>

          <span>POLÍTICA DE PRIVACIDAD</span>
          <span>POLÍTICA DE COOKIES</span>      
      </div>
    </div>
  );
}
