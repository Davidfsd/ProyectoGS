import Layout from "../../componentes/Layout";
import css from "../../styles/Order.module.css";
import Image from "next/image";
import { UilBill } from "@iconscout/react-unicons";
import Cooking from "../../assets/cooking.png";
import Onway from "../../assets/onway.png";
import { UilBox } from "@iconscout/react-unicons";
import { UilCopy } from "@iconscout/react-unicons";
import Spinner from "../../assets/spinner.svg";
import { client } from "../../lib/client";
import { useEffect } from "react";


export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);
  return {
    props: {
      order: order[0],
    },
  };
};

export default function Orders({ order }) {
  useEffect(()=> {
    if(order.status>3)
    {
      localStorage.clear();
    }
  }, [order])
  return (
    <Layout>
      <div className={css.container}>
        <span className={css.heading}>Pedido en proceso</span>
        <div className={css.details}>
          <div>
            <span>ID pedido</span>
            <span>{order._id}
              <UilCopy  className={css.copy} width={25} height={25} onClick={() =>  navigator.clipboard.writeText(order._id)}/>
            </span>
            
          </div>
          <div>
            <span>Nombre del cliente</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>Telefono</span>
            <span>{order.phone}</span>
          </div>
          <div>
            <span>Email</span>
            <span>{order.email}</span>
          </div>
          <div>
            <span>Método de pago</span>
            <span>
              {order.method === 0
                ? "Contrareembolso"
                : "Pago en linea (Pagado)"}
            </span>
          </div>
          <div>
            <span>Total</span>
            <span>{order.total}€</span>
          </div>
        </div>
        <div className={css.statusContainer}>
          <div className={css.status}>
            <UilBill width={50} height={50} />
            <span>Pago</span>
            {order.method === 0 ? (
              <span className={css.pending}>En la entrega!</span>
            ) : (
              <span className={css.completed}>Completado</span>
            )}
          </div>

          <div className={css.status}>
            <Image src={Cooking} alt="" width={50} height={50} />
            <span>Elaborando</span>

            {order.status === 1 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}

            {order.status > 1 && (
              <span className={css.completed}>Completado</span>
            )}
          </div>

          <div className={css.status}>
            <Image src={Onway} alt="" width={50} height={50} />
            <span>Marchando</span>

            {order.status === 2 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}

            {order.status > 2 && (
              <span className={css.completed}>Completado</span>
            )}
          </div>

          <div className={css.status}>
            <UilBox width={50} height={50} />
            <span>Entregado</span>
            {order.status === 3 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="" />
              </div>
            )}

            {order.status > 3 && (
              <span className={css.completed}>Completado</span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
