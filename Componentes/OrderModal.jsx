import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import css from '../styles/OrderModal.module.css'
import { createOrder } from "../lib/orderHandler";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useStore } from "../store/store";

export default function OrderModal({opened, setOpened, PaymentMethod}) {
    const router = useRouter();
    const theme = useMantineTheme()
    const [FormData, setFormData] = useState({})
    const resetCart = useStore((state) => state.resetCart);
    const total = typeof window !== "undefined" && localStorage.getItem("total")

    const handleInput = (e)=> {
        setFormData({...FormData, [e.target.name]: e.target.value})
    }
    const handleSubmit = async(e)=> {
        e.preventDefault();
        const id = await createOrder({...FormData, total, PaymentMethod});
        toast.success("Pedido Realizado!");
        resetCart();
        {
        typeof window !== "undefined" && localStorage.setItem("order", id);
        }
        router.push(`/order/${id}`);
    }
    return(
        <>
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={()=>setOpened(null)}
        >
        {/* Modal content */}
        <form onSubmit={handleSubmit} className={css.formContainer}>
            <input type="text" name='name' required placeholder="Nombre" onChange={handleInput}/>
            <input type="text" name='phone' required placeholder="Número de telefono" onChange={handleInput}/>
            <textarea required name='address' placeholder="Dirección" rows={3} columnns={8} onChange={handleInput}/>
            {PaymentMethod===0 ? 
            <span>
                Vas a pagar <span>{total}€</span> en tu entrega
            </span> : 
            <span>
                Ha realizado el pago con éxito <span>{total}€</span>
            </span>
}
            <button type='submit' className="btn">Realizar Pedido</button>
        </form>
      <Toaster />
      </Modal>
        </>
    )
};