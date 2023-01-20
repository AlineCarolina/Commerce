/* 7 - Return the name and sold of the snacks that have been sold in a quantity other than 50 and that the tags field does not exist. */

db.produtos.find({
    $and: [
        { curtidas: { $ne: 50 } },
        { tags: { $exists: false } },
    ],
}, {
    _id: 0,
    nome: 1,
    vendidos: 1,
});