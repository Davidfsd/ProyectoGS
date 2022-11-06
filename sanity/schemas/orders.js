export default {
    name : 'order',
    title : 'Order',
    type: "document",
    fields: [
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
        }

    ]
}