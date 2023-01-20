/* 24 - Sort in all documents the elements of the array Nutritional Values by the percentage field in descending order. */

db.produtos.updateMany({}, {
    $push: {
        valoresNutricionais: {
            $each: [],
            $sort: { percentual: -1 },
        },
    },
});

db.produtos.find({}, {
    _id: 0,
    nome: 1,
    valoresNutricionais: 1,
});