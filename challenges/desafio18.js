/* 18 - Include bacon at the end of the ingredients list for Big Mac and Cheese Quarter Sandwiches. */

db.produtos.updateMany({
    nome: { $in: ["Big Mac", "Quarteirão com Queijo"] },
}, {
    $push: { ingredientes: "bacon" },
});
  
db.produtos.find({}, {
    _id: 0,
    nome: 1,
    ingredientes: 1,
});