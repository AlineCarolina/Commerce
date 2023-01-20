/* 11 - Return the product name, the amount of likes and how many items were sold for products that are not the same as Big Mac and McChicken. */

db.produtos.find({
    nome: {
        $nin: ["Big Mac", "McChicken"],
    },
}, {
    _id: 0,
    nome: 1,
    curtidas: 1,
    vendidos: 1,
});