import Image from "next/image";
import css from "../styles/Categorias.module.css";
import Bocata from "../assets/Bocata.png";
import Bebidas from "../assets/Bebidas.png";
import Entrantes from "../assets/Entrantes.png";
import Link from "next/link";
import { UilSearchAlt } from "@iconscout/react-unicons";
import React, { useState } from 'react';


export default function Categorias() {

  const [Order, setOrder] = useState('');

  const submitValue = () => {
    const frmdetails = {
        'Order' : Order,

    }
    console.log(Order);
}


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
                <input className={css.input} type="text" placeholder="ej. 123456789" onChange={e => setOrder(e.target.value)}/>
                { (
                  <Link href={`/order/${Order}`}>
                    <button  className={css.lupa} onClick={submitValue}><UilSearchAlt/></button>
                  </Link>
                )}
                    
              </div>
        </div>
    </div>

    <div className={css.heading}>
      <span>QUE TE APETECE?</span>

      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Link href="../#entrantes">
                <Image src={Entrantes} alt="s1" objectFit="cover" layout="intrinsic" />
            </Link>
          </div>
          <span className={css.categoria}>Entrantes</span>
        
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Link href="../#bocadillos">
              <Image src={Bocata} alt="s1" objectFit="cover" layout="intrinsic" />
            </Link>
          </div>
          <span className={css.categoria}>Bocadillos</span>
        
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Link href="../#bebidas">
              <Image src={Bebidas} alt="s1" objectFit="cover" layout="intrinsic" />
            </Link>
          </div>
          <span className={css.categoria}>Bebidas</span>
        
        </div>
      </div>
        
      </div>

    </>
  );
}
