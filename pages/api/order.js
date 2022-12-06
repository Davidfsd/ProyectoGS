import { client } from "../../lib/client.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const newOrder = await JSON.parse(req.body);
      try {
        await client
          .create({
            _type: "order",
            idOrder: newOrder.idOrder,
            name: newOrder.name,
            address: newOrder.address,
            email: newOrder.email,
            phone: newOrder.phone,
            total: newOrder.total,
            method: newOrder.method,
            status: 1,
            productoSelect: newOrder.bocatas
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
