import css from "../styles/Footer.module.css"
import Logo from "../assets/Logo.png"
import Image from "next/image";
import { UilInstagram, UilFacebook, UilGithub } from '@iconscout/react-unicons'

export default function Footer() {
  return (
    
    <div className={css.container}>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={90} height={90}/>
        <span className={css.namelogo}>BocAxo</span>
      </div>
      <div className={css.centrarFooter}>
        <span className={css.titulo}>Sobre nosotros</span>
          <span>Quienes somos</span>
          <span>Trabaja con nosotros</span>
          <span>Contacto</span>
          <span>Seguridad</span>
      </div>
      <div>
      <span className={css.titulo}>Síguenos</span>
        <div className={css.redes}>
          <UilFacebook size='40'/>

          <UilInstagram size='40'/>
        </div>
      </div>
      <div className={css.centrarFooter}>
          <span>CONDICIONES DE USO</span>
          <span>POLÍTICA DE PRIVACIDAD</span>
          <span>POLÍTICA DE COOKIES</span>      
      </div>
    </div>
  );
}
