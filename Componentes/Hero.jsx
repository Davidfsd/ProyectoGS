import Image from 'next/image';
import css from '../styles/Hero.module.css';
import Moto from '../assets/Moto.png';
import HeroImage from '../assets/Heroimage.png';
import { UilPhone } from "@iconscout/react-unicons";
import Pizza1 from "../assets/p1.jpg";

export default function Hero() {
    return(
        <div className={css.container}>
            {/* Zona izquierda Main*/}
            <div className={css.left}>
                <div className={css.Moto}>
                    <span>Mas que rápidos</span>
                    <Image src={Moto} alt="" width={40} height={25}/>
                </div>
            
                <div className={css.heroText}>
                    <span>Los mas rápidos</span>
                    <span>En la entrega</span>
                    <span>
                        De su <span style={{color: "var(--themeOrange)"}}>Bocata</span>
                    </span>
                </div>
                <span className={css.miniText}>
                    « Servir con sabores de calidad balanceando tradicion
                    y novedad en cada bocata »
                </span>

                <button className={`btn ${css.btn}`}>
                    Comenzar
                </button>
            </div>

            <div className={css.grow}></div>

            {/* Zona Derecha Main */}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="heroImage" layout="intrinsic" />
                </div>

                <div className={css.ContactUs}>
                    <span>968 25 25 25</span>
                    <div>
                        <UilPhone color="white" />
                    </div>
                </div>

                <div className={css.Pizza}>
                    <div>
                        <Image src={Pizza1} alt="pizza" objectFit="cover" layout="intrinsic"/>
                    </div>
                    <div className={css.details}>
                        <span>Bocata Escalopines</span>
                        <span>
                            <span style={{ color: "var(--themeOrange)" }}>$ </span> 9.00
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};
