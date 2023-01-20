/* 12 - Add ketchup to ingredients for all sandwiches except McChicken, ensuring there are no duplicate ingredients. */

db.produtos.updateMany(
    { nome: { $ne: "McChicken" } },
    { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find({}, {
    _id: 0,
    nome: 1,
    ingredientes: 1,
});