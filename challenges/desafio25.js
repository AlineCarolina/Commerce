/* 25 - Add the very sodium element to the end of the tags array in products where the sodium percentage is greater than or equal to 40. */

db.produtos.updateMany({
    valoresNutricionais: {
        $elemMatch: {
            tipo: "sódio",
            percentual: { $gte: 40 },
        },
    },
}, {
    $push: {
        tags: "muito sódio",
     },
 });

db.produtos.find({}, {
    _id: 0,
    nome: 1,
    tags: 1,
});