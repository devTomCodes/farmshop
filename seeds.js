const mongoose = require('mongoose');
const product = require('./models/product');

mongoose
  .connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
  .then(() => {
    console.log('MONGO CONNECTION OPEN'.yellow);
  })
  .catch((err) => {
    console.log('OH NO SOMETHINGS WRONG WITH MONGO'.green);
  });

// const p = new product({
//   name: 'Ruby grapefruit',
//   price: 1.99,
//   category: 'fruit',
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
  {
    name: 'Granny Smith Apples',
    price: 1.29,
    category: 'fruit',
  },
  {
    name: 'Aubergine',
    price: 2.49,
    category: 'vegetable',
  },
  {
    name: 'Organic Watermelon',
    price: 3.29,
    category: 'fruit',
  },
  {
    name: 'Kale',
    price: 1.99,
    category: 'vegetable',
  },
  {
    name: 'Whole Milk',
    price: 3.99,
    category: 'dairy',
  },
];

product
  .insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
