/* 3 - Return the best selling snack and show only the name and quantity of snacks sold. */

db.produtos.find({}, {
    _id: 0,
    nome: 1,
    vendidos: 1,
}).sort({ vendidos: -1 }).limit(1);