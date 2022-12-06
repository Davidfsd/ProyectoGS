export default {
    name : 'order',
    title : 'Order',
    type: "document",
    fields: [
        {
            name : 'idOrder',
            title: 'IdOrder',
            type: 'string',
            options : {
                maxLength: 40
            }
        },
        {
            name : 'name',
            title: 'Name',
            type: 'string',
            options : {
                maxLength: 40
            }
        },
        {
            name : 'address',
            title: "Address",
            type: "string",
            options: {
                maxLength: 100
            }
        },
        {
            name : 'email',
            title: "Email",
            type: "string",
        },
        {
            name : 'phone',
            title: "Phone",
            type: "string",
            options: {
                maxLength: 20
            }
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number'
        },
        {
            name: 'method',
            title: "Method",
            type: 'number'
        },
        {
            name: 'status',
            title: "Status",
            type: "number"
        },
        {
            name: 'productoSelect',
            title: 'ProductoSelect',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                  {type: 'bocata'},
                  {type: 'entrante'},
                  {type: 'bebida'},
                ]
              }
            ]
          },
        // {
        //     name: 'quantity',
        //     title: "Quantity",
        //     type: "number",
        //     validation: Rule => Rule.required().positive().integer()
        // },
        
        

    ]
}