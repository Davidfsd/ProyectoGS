import { urlFor } from '../lib/client';
import css from '../styles/Menu.module.css';
import Image from 'next/image';

export default function Menu({bocaxo}) {

    console.log(bocaxo)
    return(
        <div className={css.container}>

            <div className={css.heading}>
                <span>NUESTRO MENU</span>
                <span>Bocadillos</span>
            </div>

        <div className={css.menu}>
            {/* bocaxo */}
            {bocaxo.map((pizza,id) =>{

                const src = urlFor(pizza.image).url()
                return(
                    <div className={css.pizza} key={id}>
                        <div className={css.ImageWrapper}>
                            <Image 
                            loader={()=> src}
                            src={src} alt=""
                            objectFit="cover"
                            layout="fill"
                            />
                        </div>

                    <span>{pizza.name}</span>
                    <span><span style={{color: 'var(--themeRed)'}}>€</span> {pizza.price[1]}</span>
                    </div>
                );
            })}
        </div>
        </div>
    );
};