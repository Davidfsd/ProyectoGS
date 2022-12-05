import { client } from "../../lib/client.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const newContacto = await JSON.parse(req.body);
      try {
        await client
          .create({
            _type: "contacto",
            nombre: newContacto.nombre,
            apellidos: newContacto.apellidos, 
            email: newContacto.email, 
            asunto: newContacto.asunto, 
            mensaje: newContacto.mensaje
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
