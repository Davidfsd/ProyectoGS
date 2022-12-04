import css from "../styles/Formulario.module.css";
// import { useStore } from "../store/store";
import { useState } from "react";
import { createContacto } from "../lib/contactoHandler";
import toast, { Toaster } from "react-hot-toast";
import { Checkbox } from "@mantine/core";


export default function Formulario() {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
      

    const [FormData, setFormData] = useState({})

    const handleInput = (e)=> {
        setFormData({...FormData, [e.target.name]: e.target.value})
    }
 
    const handleSubmit = async(e)=> {
        e.preventDefault();
        const id = await createContacto({...FormData});
        toast.success("Formulario enviado.");  
    }

  return (
    <>
        <div className={css.container}>
            <div>
                <h1 id={css.TittleCo}>Contacto</h1>
            </div>
            
            <div id={css.fondo3}>
            <h2 id={css.subtitle}>Ponte en contacto con nosotros y resolveremos tus dudas en la mayor brevedad posible.</h2>
                <form onSubmit={handleSubmit} className={css.formulario}>
                    <span>Nombre</span>
                    <input type="text" name='nombre' required placeholder="Nombre" onChange={handleInput}/> 

                    <span>Apellidos</span>  
                    <input type="text" name='apellidos' required placeholder="Apellidos" onChange={handleInput}/>

                    <span>Email</span> 
                    <input type="text" name='email' required placeholder="Email" onChange={handleInput}/>   

                    <span>Asunto</span>  
                    <input type="text" name='asunto' required placeholder="Asunto" onChange={handleInput}/>

                    <span>Mensaje</span> 
                    <textarea type="text" name='mensaje' required placeholder="Mensaje" rows={15} cols={71} onChange={handleInput}/>

                    <input type="checkbox" id="topping" name="topping" value="acepto" onChange={handleOnChange}/> He leído y acepto la política de protección de datos.

                    <button type='submit' className="btn">Enviar</button>
                    <button type="reset" value="Reset Form" className="btn">Reset</button>
                </form>
            </div>
        </div>
        <Toaster />
    </>
    

  );
}

{/* <form action="" class={css.formulario}>
                    <label for="fname"></label>
                        <input type="text" id="fname" name="fname" placeholder="Tu nombre..."/>
                    <label for="email"></label>
                        <input type="text" id="email" name="email" placeholder="Tu email..."/>
                    <label for="Asunto"></label>
                        <input type="text" id="asunto" name="asunto" placeholder="Asunto..."/>
                    <textarea name="mensaje" rows="15" cols="71" placeholder="Tu mensaje..."></textarea>
                        <input id ={css.buttonForm}type="submit" value="Enviar"/>
                </form>  */}