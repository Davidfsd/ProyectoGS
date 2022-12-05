 // Create trabaja in sanity database
 export const createTrabaja = async ({ email, telefono, documento, numIdentidad, nombre, primerApellido, segundoApellido, fechaNacimiento, codigoPostal, ciudad, direccion,curriculum }) => {
    console.log({ email, telefono, documento, numIdentidad, nombre, primerApellido, segundoApellido, fechaNacimiento, codigoPostal, ciudad, direccion,curriculum })
      const res = await fetch("/api/trabaja", {
        method: "POST",
        body: JSON.stringify({
          email: email, 
          telefono: telefono, 
          documento: documento, 
          numIdentidad: numIdentidad, 
          nombre: nombre,
          primerApellido: primerApellido, 
          segundoApellido: segundoApellido, 
          fechaNacimiento: fechaNacimiento,
          codigoPostal: codigoPostal,
          ciudad: ciudad, 
          direccion: direccion,
          curriculum:curriculum
        }),
      });
      const id = await res.json();
      return id;
    };