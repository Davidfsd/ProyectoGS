import emailjs from '@emailjs/browser';
import { client } from './client';

// Create order in sanity database
 export const createOrder = async ({ idOrder, name, phone, email, address, total, PaymentMethod, bocatas }) => {
    console.log({ idOrder, name, phone, email, address, total, PaymentMethod, bocatas})
      const res = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({
          idOrder:idOrder,
          name: name,
          phone: phone,
          email: email,
          address: address,
          total: parseFloat(total),
          method: PaymentMethod,
          status: 1,
        }),
      });
      const id = await res.json();

      emailjs.send('service_a90q4xr', 'template_j96xyuy', {id, name,email}, 'W4ua3CcurT_GrSrRe').then((result) => {
        console.log(result);

    }, (error) =>{
        console.log(error.text);
    });

    patchOrder({id,productos:bocatas});
console.log(bocatas);
      return id;
    };

    export const patchOrder = async ({id, productos}) => {
      console.log({id, productos});

      client.patch(id).setIfMissing({productoSelect: []}).insert('after','productoSelect[-1]',productos).commit({autoGenerateArrayKeys: true})
    }
  
