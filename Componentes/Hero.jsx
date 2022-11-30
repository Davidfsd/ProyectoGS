import Image from 'next/image';
import css from '../styles/Hero.module.css';
import Moto from '../assets/Moto.png';
import HeroImage from '../assets/Heroimage.png';

import Bocata1 from "../assets/p1.jpg";

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

            </div>

            <div className={css.grow}></div>

            {/* Zona Derecha Main */}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="heroImage" layout="intrinsic" />
                </div>



                <div className={css.Bocata}>
                    <div>
                        <Image src={Bocata1} alt="bocata" objectFit="cover" layout="intrinsic"/>
                    </div>
                    <div>
                        <span>Bocata Escalopines</span>
                        <span>
                            <span style={{ color: "var(--themeOrange)" }}>€ </span> 9.00
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};
