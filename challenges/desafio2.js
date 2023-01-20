/* 2 - Sort the product collection by the amount of snacks sold in ascending order and show only the name and quantity of snacks sold. */

db.produtos.find({}, {
    _id: 0,
    nome: 1,
    vendidos: 1,
}).sort({ vendidos: 1 });