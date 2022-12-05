export default {
    name: "contacto",
    title: "Contacto",
    type: "document",
    fields: [
      {
        name: "asunto",
        title: "Asunto",
        type: "string",
        options : {
          maxLength: 40
        }
      },
      {
        name: "nombre",
        title: "Nombre",
        type: "string",
        options : {
          maxLength: 40
        }
      },
      {
        name: "apellidos",
        title: "Apellidos",
        type: "string",
        options : {
          maxLength: 100
        }
      },
      {
        name: "email",
        title: "Email",
        type: "string",
        options : {
          maxLength: 60
        }
      },
      {
        name: "mensaje",
        title: "Mensaje",
        type: "string"
      }
    ],
}
