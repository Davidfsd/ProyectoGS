
// Create order in sanity database
 export const createOrder = async ({ idOrder, name, phone, email, address, total, PaymentMethod, items }) => {
    console.log({ idOrder, name, phone, email, address, total, PaymentMethod, items})
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
          items: items,
          status: 1,
        }),
      });
      const id = await res.json();


    //   emailjs.sendForm('service_a90q4xr', 'template_j96xyuy', form, 'W4ua3CcurT_GrSrRe').then((result) => {
    //     console.log(result);
    // }, (error) =>{
    //     console.log(error.text);
    // });

      return id;
    };
  