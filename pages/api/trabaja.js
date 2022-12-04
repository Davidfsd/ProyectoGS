import { client } from "../../lib/client.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const newTrabaja = await JSON.parse(req.body);
      try {
        await client
          .create({
            _type: "trabaja",
            email: newTrabaja.email, 
            telefono: newTrabaja.telefono, 
            documento: newTrabaja.documento, 
            numIdentidad: newTrabaja.numIdentidad, 
            nombre: newTrabaja.nombre,
            primerApellido: newTrabaja.primerApellido, 
            segundoApellido: newTrabaja.segundoApellido, 
            fechaNacimiento: newTrabaja.fechaNacimiento,
            codigoPostal: newTrabaja.codigoPostal,
            ciudad: newTrabaja.ciudad, 
            direccion: newTrabaja.direccion

          })
          .then((data) => {
            res.status(200).json(data._id);
          });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error, check console" });
      }
      break;
  }
}
