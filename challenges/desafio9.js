/* 9 - Return the name of all snacks that have calories below 500. */

db.produtos.find({
    valoresNutricionais: {
        $elemMatch: {
            tipo: "calorias",
            quantidade: { $lt: 500 },
        },
    },
}, {
    _id: 0,
    nome: 1,
});