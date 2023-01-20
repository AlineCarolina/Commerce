/* 8 - Delete the snacks that have less than 50 likes and return the name of the snacks that are left in the bank. */

db.produtos.deleteMany({
    curtidas: { $lt: 50 },
});

db.produtos.find({}, {
    _id: 0,
    nome: 1,
});