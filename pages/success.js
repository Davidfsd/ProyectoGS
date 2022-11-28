import Layout from "../componentes/Layout";
import OrderModal from "../componentes/OrderModal";

export default function Success() {

    return(
        <Layout>
            <OrderModal opened={true} PaymentMethod={1}/>
        </Layout>
    )
};
