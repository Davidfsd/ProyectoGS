import Image from "next/image";
import Layout from "../Componentes/Layout";
import css from '../styles/Cookies.module.css';
import Link from "next/link";


export default function Cookies() {
  return (
    <Layout>
    <div className={css.container}>
        <h1 className={css.titulo}>Aviso sobre Cookies</h1>
            <p>Este aviso sobre cookies se aplica a los sitios web, aplicaciones y comunicaciones por correo electrónico de BocAxo.</p>
            <p>La finalidad de este aviso sobre cookies es explicarle qué cookies usamos y por qué las usamos.</p>
        <h1 className={css.titulo}>¿Qué son las cookies?</h1>
            <p>Usamos cookies en nuestras aplicaciones, sitios web y comunicaciones por correo electrónico.</p>
            <p>Una cookie es un documento de texto muy pequeño, el cual suele incluir un identificador único.
                 Las cookies se crean cuando su navegador carga un sitio web en concreto. 
                 El sitio web envía información al navegador y luego el navegador crea un archivo de texto. 
                 Cada vez que el usuario vuelve al mismo sitio web, el navegador recupera y envía este archivo al servidor del sitio web. 
                 Para más información sobre el uso de cookies, visite <Link href="www.allaboutcookies.org"><u>www.allaboutcookies.org</u></Link>.
            </p>
            <p>
            También usamos otras tecnologías como scripts, balizas web y, en aplicaciones, kits de desarrollo de software (SDKs, por sus siglas en inglés), 
            que cumplen una función similar a la de las cookies y que nos permiten supervisar y mejorar nuestras aplicaciones, 
            sitios web y comunicaciones por correo electrónico. Cuando nos refiramos a cookies en este aviso sobre cookies, también incluimos estas tecnologías similares. 
            Si desea obtener más información sobre nuestras prácticas para proteger su privacidad, le rogamos que visite nuestra <Link href="../privacidad"><u>política de privacidad</u></Link>.
            </p>
            <p>
            Cuando usted da su consentimiento al uso que hacemos de las cookies, solemos conservar el mismo durante seis meses desde su última interacción con nuestros sitios web 
            o aplicaciones antes de volver a solicitar su consentimiento.
            </p>
        <h1 className={css.titulo}>¿Por qué usamos cookies?</h1>
            <p>Instalamos cookies por una serie de finalidades distintas. A continuación, encontrará un resumen de las distintas finalidades por las que usamos cookies.</p>
            <ol>
                <li><b>Cookies necesarias.</b> Estas cookies son necesarias para habilitar y mantener las funcionalidades principales de nuestros sitios web y aplicaciones. 
                    Los servicios que haya solicitado, como añadir productos a su pedido, no pueden funcionar sin estas cookies.
                     Ciertas partes de nuestros sitios web y aplicaciones no funcionarán sin estas cookies, como por ejemplo, añadir productos a su pedido o finalizar su pedido. 
                     También usamos cookies para ayudar a mantener segura nuestra plataforma y probar nuevas funcionalidades para asegurarnos de que no interfieren con las funcionalidades
                      principales de la plataforma.
                </li>
                <li><b>Cookies funcionales.</b> Puede que usemos cookies que no son esenciales pero que habilitan varias funcionalidades útiles en nuestros sitios web. 
                Por ejemplo, estas cookies recopilan información sobre su interacción con nuestros sitios web y aplicaciones, y pueden ser utilizadas para recordar sus preferencias
                 o sus intereses.
                </li>
                <li><b>Cookies analíticas.</b> Analizamos su comportamiento como usuario en nuestro sitio web, usando cookies y tecnologías similares, para así mejorar nuestro 
                sitio web y adaptarlo para ofrecerle la mejor experiencia posible. Esperamos que, al analizar estos datos, podemos garantizar que nuestro sitio web está lo más 
                adaptado posible a los usuarios. Por ejemplo, hacemos un seguimiento de qué páginas son las más visitadas y de cómo navega en nuestro sitio web. Usamos Google 
                Analytics para entender mejor cómo los clientes usan nuestros sitios web y aplicaciones. Si no desea que se utilice Google Analytics en su navegador, puede instalar 
                el siguiente complemento de Google: https://tools.google.com/dlpage/gaoptout?hl=en_GB.
                </li>
                <li><b>Cookies de publicidad.</b> Usamos cookies y tecnologías similares para ofrecerle publicidad sobre nuestra plataforma y servicios y recopilar información 
                sobre sus hábitos de navegación para que la publicidad que le ofrecemos sea más relevante para usted y sus intereses. Por este motivo, analizamos (entre otras cosas),
                 con cuanta frecuencia usa nuestro sitio web y qué productos le interesan. Esto nos permite adaptar mejor los anuncios que le ofrecemos a sus preferencias. 
                 También usamos estas cookies para comprobar si viene de un sitio web de nuestros anunciantes o empresas asociadas. Puede que compartamos esta información 
                 con terceros que ayuden a gestionar nuestra publicidad en línea.
                </li>
                <li><b>Cookies de Redes sociales</b> Estas cookies se utilizan cuando comparte información usando un botón para compartir de una red social o un botón de 
                "me gusta" en nuestros sitios web o aplicaciones, o cuando interactúa con nuestro contenido en, o a través de, una plataforma social como Facebook o Twitter. 
                Estas cookies recopilan información sobre su interacción en redes sociales con nosotros, como si tiene o no una cuenta de una red social y si ha iniciado sesión
                 en dicha cuenta cuando interactúa con nuestro contenido en nuestros sitios web y aplicaciones. Esta información puede relacionarse con actividades de 
                 segmentación/publicitarias.
                </li>
            </ol>
        <h1 className={css.titulo}>Gestionar sus preferencias de cookies</h1>
            <p>1. Habilitar/desactivar cookies y eliminar cookies</p>
            <p>
            Puede que también sea posible eliminar o desactivar cookies que se hayan instalado previamente en su dispositivo a través de los ajustes de su navegador. 
            Al desactivar cookies, es posible que partes de nuestro sitio web no funcionen. 
            No se pueden desactivar las cookies que sean esenciales para el funcionamiento del sitio web. Puede usar los enlaces siguientes para obtener más información 
            sobre cómo cambiar los ajustes de cookies en su navegador, y en qué medida puede eliminar cookies a través de los ajustes de su navegador:
            </p>
            <ul>
                <li>Chrome</li>
                <li>Firefox</li>
                <li>Internet Explorer</li>
                <li>Edge</li>
                <li>Safari (iOS)</li>
                <li>Safari (macOS)</li>
                <li>Opera </li>
                <li>Samsung Android Browser</li>
            </ul>
            <p>2. Información adicional y preguntas</p>
            <p>
            Para más información sobre el tratamiento de sus datos personales, incluyendo información sobre sus derechos, 
            le rogamos que consulte nuestra <Link href="../privacidad" className={css.enlace}><u>política de privacidad</u></Link>. Si tiene cualesquiera preguntas o quejas en relación con nuestro aviso sobre cookies, 
            estamos encantados de ayudarle. También nos gustaría conocer cualquier sugerencia que pueda tener para mejorar nuestro aviso sobre cookies.
            </p>
    </div>
    </Layout>
  );
}
