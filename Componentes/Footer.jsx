import css from "../styles/Footer.module.css"
import Logo from "../assets/Logo.png"
import Image from "next/image";
import { UilInstagram, UilFacebook, UilGithub } from '@iconscout/react-unicons'

export default function Footer() {
  return (
    <div className={css.container}>
      <span>TODOS LOS DERECHOS RESERVADOS</span>
      <div className={css.redes}>
        <UilFacebook size='45'/>
        <UilGithub size='45'/>
        <UilInstagram size='45'/>
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="logo" width={50} height={50} />
        <span>Nombre</span>
      </div>
    </div>
  );
}
