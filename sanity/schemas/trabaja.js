export default {
    name: "trabaja",
    title: "Trabaja",
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
        type: "string",
        options : {
          maxLength: 10
        }
      },
      {
        name: "documento",
        title: "Documento",
        type: "string",
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
        type: "string",
        options : {
          maxLength: 6
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
