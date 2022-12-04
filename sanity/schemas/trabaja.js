export default {
    name: "cv",
    title: "CV",
    type: "document",
    fields: [
      {
        name: "email",
        title: "Email",
        type: "string",
        options : {
          maxLength: 100
        }
      },
      {
        name: "telefono",
        title: "Telefono",
        type: "number",
      },
      {
        name: "documento",
        title: "Documento",
        type: "string",
        options : {
          maxLength: 20
        }
      },
      {
        name: "numIdentidad",
        title: "NumIdentidad",
        type: "string",
        options : {
          maxLength: 20
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
        name: "primerApellido",
        title: "PrimerApellido",
        type: "string",
        options : {
          maxLength: 40
        }
      },
      {
        name: "segundoApellido",
        title: "SegundoApellido",
        type: "string",
        options : {
          maxLength: 40
        }
      },
      {
        name: "fechaNacimiento",
        title: "FechaNacimiento",
        type: "string",
        options : {
          maxLength: 50
        }
      },
      {
        name: "codigoPostal",
        title: "CodigoPostal",
        type: "number",
        options : {
          maxLength: 10
        }
      },
      {
        name: "ciudad",
        title: "Ciudad",
        type: "string",
        options : {
          maxLength: 40
        }
      },
      {
        name: "direccion",
        title: "Direccion",
        type: "string",
        options : {
          maxLength: 200
        }
      }
    ],
}
