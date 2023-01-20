/* 14 - Create a query that returns all snacks that have pickles in their ingredients and shows only the first 3 items contained in the array NutritionalValues. */

db.produtos.find({
    ingredientes: { $all: ["picles"] },
}, {
    _id: 0,
    nome: 1,
    ingredientes: 1,
    valoresNutricionais: { $slice: 3 },
}); 