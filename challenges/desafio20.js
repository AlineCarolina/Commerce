/* 20 - Remove the first ingredient from the Quarteirão com Queijo sandwich. */

db.produtos.updateOne({
    nome: "Quarteirão com Queijo",
}, {
    $pop: { ingredientes: -1 },
});

db.produtos.find({}, {
    _id: 0,
    nome: 1,
    ingredientes: 1,
});