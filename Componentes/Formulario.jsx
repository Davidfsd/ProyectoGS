import css from "../styles/Formulario.module.css";
import { useState } from "react";
import { createContacto } from "../lib/contactoHandler";
import toast, { Toaster } from "react-hot-toast";


export default function Formulario() {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChangeTrue = () => {
        setIsChecked(!isChecked);
        console.log(setIsChecked);
      };


    const [FormData, setFormData] = useState({})

    const handleInput = (e)=> {
        setFormData({...FormData, [e.target.name]: e.target.value})
    }
 
    const handleSubmit = async(e)=> {
        if (!isChecked) {
            e.preventDefault();
            toast.success("Acepta las politicas");
        }else{
            e.preventDefault();
            await createContacto({...FormData});
            toast.success("Formulario Enviado");
        }
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
                    <div className={css.divSpan}>
                        <span>Nombre</span> 
                    </div>
                    <input type="text" name='nombre' required placeholder="Nombre" onChange={handleInput}/> 

                    <div className={css.divSpan}>
                        <span>Apellidos</span> 
                    </div>
                    <input type="text" name='apellidos' required placeholder="Apellidos" onChange={handleInput}/>

                     <div className={css.divSpan}>
                        <span>Email</span> 
                    </div>
                    <input type="text" name='email' required placeholder="Email" onChange={handleInput}/>   

                    <div className={css.divSpan}>
                        <span>Asunto</span> 
                    </div> 
                    <input type="text" name='asunto' required placeholder="Asunto" onChange={handleInput}/>

                    <div className={css.divSpan}>
                        <span>Mensaje</span> 
                    </div>
                    <textarea type="text" name='mensaje' required placeholder="Mensaje" rows={15} cols={71} onChange={handleInput}/>

                    <div className={css.divDatos}>
                        <input type="checkbox" name="politicas" value="acepto" onChange={handleOnChangeTrue}/> 
                        <span>He leído y acepto la política de protección de datos.</span>
                    </div>
                    <div className={css.divButtons}>
                        <button type='submit' className="btn">Enviar</button>
                        <button type="reset" value="Reset Form" className="btn">Limpiar</button>
                    </div>
                    
                </form>
            </div>
        </div>
        <Toaster />
    </>
  );
}
