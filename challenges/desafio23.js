/* 23 - Insert the elements combo and tasty in the array tags of all the sandwiches and take the opportunity to leave the elements in ascending alphabetical order. */

db.produtos.updateMany({}, {
   $push: {
       tags: {
            $each: ["combo", "tasty"],
            $sort: 1,
        },
    },
});

db.produtos.find({}, {
    _id: 0,
    nome: 1,
    tags: 1,
});