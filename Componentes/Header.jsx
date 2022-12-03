import Image from "next/image";
import Logo from "../assets/Logo.png";
import css from "../styles/Header.module.css";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UilPhone } from "@iconscout/react-unicons";



export default function Header() {

  const items = useStore((state) => state.cart.bocatas.length);
  const [Order, setOrder] = useState("")
  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  },[]);

  return (
        <div className={css.header}>
          <Link href="../">
          <div className={css.logo}>
            <Image src={Logo} alt="logo" width={50} height={50} />
            <span className={css.namelogo}>BocAxo</span>
          </div>
          </Link>
          <ul className={css.menu}>
            <li>
              <Link href="../">Inicio</Link>
            </li>
            <li>
            <Link href="../#bocadillos">Menu</Link>
            </li>
            <li>Contacto</li>
            <li>
                {Order && (
                  <Link href={`/order/${Order}`}>
                    <div className={css.cart}>
                      Pedido
                      {Order != ""}
                    </div>
                  </Link>
                )}
            </li>
          </ul>
          
          <div className={css.ContactUs}>
            <span>968 25 25 25</span>
            <div>
                <UilPhone color="white" />
            </div>
          </div>

          <div className={css.rightSide}>
            <Link href="/cart">
              <div className={css.cart}>
                <UilShoppingBag size="35" color="#2E2E2E" />
                <div className={css.badge}>{items}</div>
              </div>
            </Link>

            {Order && (
              <Link href={`/order/${Order}`}>
                <div className={css.cart}>
                  <UilReceipt size="35" color="#2E2E2E" />
                  {Order != "" && <div className={css.badge}>1</div>}
                </div>
              </Link>
            )}
          </div>
        </div>
  );
}
