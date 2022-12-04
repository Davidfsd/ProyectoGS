import Layout from "../Componentes/Layout";
import css from '../styles/QuienesSomos.module.css';


export default function Quienes() {
  return (
    <Layout>
    <div className={css.container}>
        <div >
            <h1 className={css.titulo}>¿Que es BocAxo?</h1>
        </div>
        <div >
            <p>
              Somos una empresa de comida rápida basada en lo mas puro de acho de murcia.
              Apoyandonos en la tecnología como centro de nuestro negocio, creamos soluciones innovadoras para conectar cliente y
              aseguramos de cubrir los gusto de cada cliente. Buscamos un impacto sostenible en nuestra comunidad: 
              somos una empresa responsable, y comprometida con el meidio ambiente, utilizando energia renovable y utilizando la mejor calidad de los alimentos ecológicos.
            </p>
        </div>
    </div>
    </Layout>
  );
}
