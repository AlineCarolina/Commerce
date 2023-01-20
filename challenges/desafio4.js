/* 4 - Return snacks that had sales greater than 50 and less than 100. Show only the name and quantity of snacks sold. Sort by quantity of snacks sold in ascending order. */

db.produtos.find({
    vendidos: { $gt: 50, $lt: 100 },
}, {
    _id: 0,
    nome: 1,
    vendidos: 1,
}).sort({ vendidos: 1 });