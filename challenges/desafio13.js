/* 13 - Include the field createdBy in all documents, putting Ronald McDonald in the value of that field. */

db.produtos.updateMany({}, {
    $set: { criadoPor: "Ronald McDonald" },
});

db.produtos.find({}, {
    _id: 0,
    nome: 1,
    criadoPor: 1,
});