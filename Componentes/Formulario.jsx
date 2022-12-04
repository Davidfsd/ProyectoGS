import css from "../styles/Formulario.module.css";

export default function Formulario() {
  return (
    
    <>
        <div className={css.container}>
            <div>
                <h1 id={css.TittleCo}>Contacto</h1>
            </div>
            
            <div id={css.fondo3}>
            <h2 id={css.subtitle}>Ponte en contacto con nosotros y resolveremos tus dudas en la mayor brevedad posible.</h2>
                <form action="" class={css.formulario}>
                    <label for="fname"></label>
                        <input type="text" id="fname" name="fname" placeholder="Tu nombre..."/>
                    <label for="email"></label>
                        <input type="text" id="email" name="email" placeholder="Tu email..."/>
                    <label for="Asunto"></label>
                        <input type="text" id="asunto" name="asunto" placeholder="Asunto..."/>
                    <textarea name="mensaje" rows="15" cols="71" placeholder="Tu mensaje..."></textarea>
                        <input id ={css.buttonForm}type="submit" value="Enviar"/>
                </form> 
            </div>
        </div>
    </>

  );
}
