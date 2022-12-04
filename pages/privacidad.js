import Image from "next/image";
import Layout from "../Componentes/Layout";
import css from '../styles/Privacidad.module.css';
import Link from "next/link";


export default function Cookies() {
  return (
    <Layout>
    <div className={css.container}>
        <p>Última actualización Lunes 5 de diciembte 2022</p>
        <h1 className={css.titulo}>Introducción</h1>
            <p>En Bocaxo estamos comprometidos con la creación de la comunidad gastronómica más grande del mundo,
             lo cual empieza con la protección de la privacidad de todos los integrantes de nuestra comunidad.
              Esto significa que protegeremos los datos personales y demás información de todos los visitantes que accedan
               a nuestros sitios web o servicios a través de cualquier aplicación móvil, plataforma o dispositivo (colectivamente, 
               los "Servicios").
            </p>
            <p>
            Esta política de privacidad ("Política de Privacidad") explica cómo Bocaxo, nuestras subsidiarias y afiliados recopilan,
             comparten y utilizan sus datos personales. También encontrará información sobre cómo puede ejercer sus derechos de privacidad. 
             Al utilizar nuestros Servicios, acepta que Bocaxo utilice sus datos personales como se describe en esta Política de Privacidad.
              Los términos "nosotros", "nos" o "nuestro/a" hacen referencia a Bocaxo SL, y todos los términos que no estén definidos
               en esta Política de Privacidad se definen en nuestros Términos.
            </p>
        <hr width="100%"/>
        <h1 className={css.titulo}>Resumen</h1>
            <p>A continuación, resumimos los puntos clave de nuestra Política de Privacidad.</p>
            <p>Estas son las categorías generales de datos personales que recopilamos sobre usted y las finalidades por las que lo hacemos::</p>
                <ol>
                    <li>Información que usted proporciona de forma voluntaria:</li>
                    <p>Datos personales de registro cuando realizas un pedido para que podamos:</p>
                    <ol>
                        <li>contactar con usted para conocer su opinión sobre nuestros Servicios;</li>
                        <li>notificarle sobre cambios o actualizaciones en nuestros Servicios.</li>
                    </ol>
                    <p>Información de transacción cuando realiza un Pedido con un Restaurante para:</p>
                    <ol>
                        <li>procesar su Pedido y facturarle (pero tenga en cuenta que BocAxo nunca almacena la información de su tarjeta de crédito en nuestros sistemas);</li>
                        <li>remitir su Pedido al Restaurante;</li>
                        <li>mantenerle informado sobre el estado de su Pedido;</li>
                        <li>responder a sus consultas y preguntas sobre sus Pedidos y resolver problemas;</li>
                        <li>protegerle a usted y a los Servicios tratando de detectar y prevenir fraudes u otros actos que infrinjan nuestros Términos o políticas relativos a los Servicios.</li>
                    </ol>
                    <li>Información que recopilamos automáticamente</li>
                    <p>Información de actividad para que podamos:</p>
                    <ol>
                        <li>ofrecerle una experiencia mejorada;</li>
                        <li>darle acceso a su Historial de pedidos y preferencias; y</li>
                        <li>ofrecer otros servicios que nos pida.</li>
                    </ol>
                    <p>Cookies y tecnologías similares para que podamos:</p>
                    <ol>
                        <li>medir y analizar el uso y la efectividad de nuestros Servicios;</li>
                        <li>personalizar y optimizar la orientación de la publicidad de nuestros Servicios en otros sitios web y plataformas; y</li>
                        <li>proporcionar servicios de ubicación si elige compartir su ubicación geográfica.</li>
                    </ol>
                </ol>
            <p>
            Tratamos los datos personales que usted proporciona de forma voluntaria, la información que recopilamos automáticamente
             y la información que obtenemos de fuentes externas para mejorar constantemente nuestros Servicios. De este modo, podemos
              hacer que le resulte aún más fácil encontrar la comida que le apetezca y cuando le apetezca, sin importar qué dispositivo
               elija usar o en qué parte del mundo se encuentre.
            </p>
          
    </div>
    </Layout>
  );
}
