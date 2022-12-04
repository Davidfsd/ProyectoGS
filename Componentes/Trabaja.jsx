import css from "../styles/Trabaja.module.css";
import { useState } from "react";
import { createTrabaja } from "../lib/TrabajaHandler";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";


export default function Formulario() {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
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
            toast.error("Acepta las politicas");
        }else{
            e.preventDefault();
            await createTrabaja({...FormData});
            toast.success("Formulario Enviado");
        }
    }

  return (
    <>
        <div className={css.container}>
            <div>
                <h1 id={css.TittleCo}>¿Quieres formar parte de la familia BocAxo?</h1>
            </div>
            
            <div id={css.fondo3}>
            <h2 id={css.subtitle}>Ponte en contacto con nosotros y envianos tu curriculum.</h2>
                <form onSubmit={handleSubmit} className={css.formulario}>
                    <div className={css.divSpan}>
                        <span>Email</span> 
                    </div>
                    <input type="text" name='email' required placeholder="Email" onChange={handleInput}/> 

                    <div className={css.divSpan}>
                        <span>Telefono</span> 
                    </div>
                    <input type="text" name='telefono' required placeholder="Telefono" onChange={handleInput}/>

                     <div className={css.divSpan}>
                        <span>Documento de identificación</span> 
                    </div>

                    <div className={css.divSpan}>
                        <select name='documento' className={css.select} onChange={handleInput}>
                            <option value="dni">DNI</option>
                            <option value="nie">NIE</option>
                            <option value="pasaporte">Pasaporte</option>
                        </select>
                    </div>
                    <input type="text" name='numIdentidad' required placeholder="Nº de identidad" onChange={handleInput}/>
                    

                    <div className={css.divSpan}>
                        <span>Nombre</span> 
                    </div>
                    <input type="text" name='nombre' required placeholder="Nombre" onChange={handleInput}/>

                    <div className={css.divSpan}>
                        <span>Primer apellido</span> 
                    </div>
                    <input type="text" name='primerApellido' required placeholder="Primer apellido" onChange={handleInput}/>

                    <div className={css.divSpan}>
                        <span>Segundo apellido</span> 
                    </div>
                    <input type="text" name='segundoApellido' required placeholder="Segundo apellido" onChange={handleInput}/>

                    <div className={css.divSpan}>
                        <span>Fecha de nacimiento</span> 
                    </div>

                    <div className={css.divSpan}>
                    <input type="date" name="fechaNacimiento" required placeholder="Fecha de nacimiento" onChange={handleInput}/>
                    </div>

                    <div className={css.divSpan}>
                        <span>Codigo postal</span> 
                    </div>

                    <input type="text" name='codigoPostal' required placeholder="Codigo postal" onChange={handleInput}/>

                    <div className={css.divSpan}>
                        <span>Ciudad</span> 
                    </div>
                    <input type="text" name='ciudad' required placeholder="Ciudad" onChange={handleInput}/>

                    <div className={css.divSpan}>
                        <span>Dirección</span> 
                    </div>
                    <input type="text" name='direccion' required placeholder="Direccion" onChange={handleInput}/>



                    <div className={css.divDatos}>
                        <input type="checkbox" name="politicas" value="acepto" onChange={handleOnChange}/> 
                        <span>Consiento que mis datos sean utilizados para esta vacante y para futuros procesos de selección que encajen con mi perfil. Para ello acepto la 
                            <Link href="../privacidad">Política de Privacidad</Link> *
                        </span>
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
