/* 16 - Add the lastModification field with the current date only in the Big Mac sandwich. */

db.produtos.updateOne({
    nome: "Big Mac",
}, {
    $currentDate: { ultimaModificacao: { $type: "date" } },
});

db.produtos.find({
    ultimaModificacao: { $exists: true },
}, {
    _id: 0,
    nome: 1,
});