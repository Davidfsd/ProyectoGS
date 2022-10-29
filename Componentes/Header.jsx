import css from "../styles/Header.module.css";
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";

export default function Header() {
    return(
        <div className={css.header}>
            {/* Zona Logo */}
            <div className={css.logo}>
                <Image src={Logo} alt="" width={50} height={50}/>
                <span>Nombre</span>
            </div>

            {/* Zona Menu Cabecera */}
            <ul className={css.menu}>
                <li>Inicio</li>
                <li>Menu</li>
                <li>Contacto</li>
            </ul>

            {/* Zona Derecha Carrito */}
            <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag size={40} color="#2E2E2E"/>
                    <div className={css.badge}>1</div>
                </div>          
            </div>

        </div>
    )
};
