import Image from "next/image";
import Layout from "../Componentes/Layout";
import css from '../styles/Condiciones.module.css';
import Link from "next/link";


export default function Cookies() {
  return (
    <Layout>
    <div className={css.container}>
        <p>Última actualización Lunes 5 de diciembte 2022</p>
        <h1 className={css.titulo}>BOCAXO Términos y condiciones de la Web</h1>
            <ol>
                <li>Términos y condiciones de uso y venta</li>
                <li>Términos y condiciones de los cupones promocionales</li>
                <li>Términos y condiciones de los concursos</li>
                <li>Términos y condiciones de la promoción "mgm - promoción no vigente"</li>
            </ol>
        <hr width="100%"/>
        <h1 className={css.titulo}>CONDICIONES DE USO DE LA PÁGINA WEB DE BOCAXO S.L. ("BocAxo") ("CONDICIONES DE LA PÁGINA WEB")</h1>
        <h2>AVISO LEGAL IMPORTANTE</h2>
            <p>
                Esta página (conjuntamente con nuestra Política de Privacidad y Política de Cookies) recoge los términos y condiciones 
                ("Términos y condiciones de la Web") en virtud de los cuáles BOCAXO S.L (en lo sucesivo "BocAxo") le proporciona sus servicios
                 a través de la página web https://www.bocaxo.es o de su aplicación móvil BOCAXO a través de la cual podrá acceder a la web
                  o a nuestros servicios (en lo sucesivo denominados conjuntamente "Web"). Por favor, lea atentamente estos términos y 
                  condiciones antes de realizar un pedido en nuestra página Web, dado que la compra de cualquier producto ofrecido 
                  en la Web estará sujeto a estos términos y condiciones. Debe entender, que mediante la realización de un pedido 
                  vía Web (ahora o en el futuro), acepta someterse a los presentes términos y condiciones. 
                  El uso de la Web se encuentra igualmente sujeto a estos Términos y Condiciones.
            </p>
            <p>
            Nos reservamos el derecho a modificar los presentes Términos y Condiciones.
             La última actualización de los presentes términos y condiciones tuvo lugar en la fecha en la parte superior de esta página.
            </p>
            <p>
            Le recomendamos que se imprima una copia de estos Términos y condiciones para futuras referencias.
            </p>
            <p>El uso de su información personal facilitada a través de la Web se regirá por nuestra Política de Privacidad y Política de Cookies.</p>
            <p>
            Para evitar cualquier duda, por favor tenga en cuenta que cualquier referencia al término "Web" en los presentes Términos y 
            Condiciones, incluye cualquier versión actual o futura de la página Web https://www.bocaxo.es así como la aplicación BOCAXO para móviles 
            a través de la cuál Ud. puede acceder a nuestra página web o servicios.
            </p>
            <p>
            Por favor, marque la casilla confirmando que acepta estos términos y condiciones que figura al final de las mismas.
             Por favor comprenda que si rechaza aceptarlos no podrá realizar pedidos a través de nuestra página Web.
            </p>
    </div>
    </Layout>
  );
}
