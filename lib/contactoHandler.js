 // Create order in sanity database
 export const createContacto = async ({ nombre, apellidos, email, asunto, mensaje }) => {
    console.log({ nombre, apellidos, email, asunto, mensaje })
      const res = await fetch("/api/contacto", {
        method: "POST",
        body: JSON.stringify({
          nombre: nombre, 
          apellidos: apellidos, 
          email: email, 
          asunto: asunto, 
          mensaje: mensaje
        }),
      });
      const id = await res.json();
      return id;
    };
  