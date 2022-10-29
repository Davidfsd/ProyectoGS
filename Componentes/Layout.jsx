import Footer from "./Footer"
import Header from "./Header"

/*Primer componente que devolvera el encabezado(Header) El cuerpo de la pagina (Childrens) y el Footer (Pie de pagina)
* El encabezado y pie de pagina sera comun en todas las vistas, el home y children se pasan como props al Layout*/

const Layout = ({children, home})=> {
    return (
        <>
            <Header home={home}/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout