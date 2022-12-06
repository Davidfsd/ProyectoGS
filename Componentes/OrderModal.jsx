import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import css from '../styles/OrderModal.module.css'
import { createOrder } from "../lib/orderHandler";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useStore } from "../store/store";
import emailjs from '@emailjs/browser';
import React, {useRef} from "react";

function generarRandom(num) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let result = "";
      for (let i = 0; i < num; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
    return result;
  }

  const idOrder = generarRandom(6);
  console.log(idOrder);


export default function OrderModal({opened, setOpened, PaymentMethod}) {

    const router = useRouter();
    const theme = useMantineTheme()
    const [FormData, setFormData] = useState({})
    const resetCart = useStore((state) => state.resetCart);
    const total = typeof window !== "undefined" && localStorage.getItem("total")
    const form = useRef();

    const handleInput = (e)=> {
        setFormData({...FormData, [e.target.name]: e.target.value})
    }

    const sendEmail = (e)=> {
        emailjs.sendForm('service_a90q4xr', 'template_j96xyuy', form.current, 'W4ua3CcurT_GrSrRe').then((result) => {
            console.log(result);
        }, (error) =>{
            console.log(error.text);
        });
    };

    const handleSubmit = async(e)=> {
        e.preventDefault();
        
        const id = await createOrder({...FormData,idOrder, total, PaymentMethod});
        toast.success("Pedido Realizado!");
        resetCart();
        {
        typeof window !== "undefined" && localStorage.setItem("order", id);
        }

        sendEmail();
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
        <form onSubmit={handleSubmit} className={css.formContainer} ref={form}>
            <input type="text" name='name' required placeholder="Nombre" onChange={handleInput}/>
            <input type="text" name='phone' required placeholder="Número de telefono" onChange={handleInput}/>
            <input type="text" name='email' required placeholder="Email" onChange={handleInput}/>
            <input type="hidden" name='id' value={idOrder} />
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