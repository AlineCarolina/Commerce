/* 5 - Return the name, likes, and sold for the snacks that had a quantity of likes equal to 36 or had a quantity of sales equal to 85. */

db.produtos.find({
    $or: [
        { curtidas: 36 },
        { vendidos: 85 },
    ],
}, {
    _id: 0,
    nome: 1,
    curtidas: 1,
    vendidos: 1,
});