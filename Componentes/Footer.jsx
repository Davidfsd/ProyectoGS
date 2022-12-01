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
      <div>
        <span>Sobre nosotros</span>
        <ul>
          <li>Quienes somos</li>
          <li>Trabaja con nosotros</li>
          <li>Contacto</li>
          <li>Seguridad</li>
        </ul>    
      </div>
      <div>
        <span>Opinión</span>
          
      </div>
      <div>
      <span>Síguenos</span>
        <div className={css.redes}>
          <UilFacebook size='45'/>

          <UilInstagram size='45'/>
        </div>
      </div>
      <div>
        <ul>
          <li>CONDICIONES DE USO</li>
          <li>POLÍTICA DE PRIVACIDAD</li>
          <li>POLÍTICA DE COOKIES</li>
          <li>TÉRMINOS Y CONDICIONES</li>
        </ul>  
      </div>
      
      
      
    </div>
  );
}
