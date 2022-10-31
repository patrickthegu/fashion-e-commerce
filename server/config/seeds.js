const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Current' },
    { name: 'Upcoming' },
    { name: 'Archive' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Jacket',
      description:
        'A black asymmetrical fleeced bomber, with double ended zip, raw neckline and khaki mesh cut-out. Reworked from deadstock sweatshirts from last season.',
      image: 'jacket.jpg',
      category: categories[0]._id,
      price: 300,
      quantity: 5
    },
    {
      name: 'Cargo Pants',
      description:
        'The "Sporty Cargo Pant" is a wide leg pant with our special double seaming throughout. Featuring cargo style pockets, d-ring key holder and double stitched elasticated waistband',
      image: 'cargo-pants.jpg',
      category: categories[0]._id,
      price: 220,
      quantity: 5
    },
    {
      name: 'Cargo Shorts',
      category: categories[1]._id,
      description:
        'a black elasticated short with exaggerated, architectural pockets, key-holder and our special double seaming throughout.',
      image: 'cargo-shorts.jpg',
      price: 150,
      quantity: 0
    },
    {
      name: 'Work Pants',
      category: categories[1]._id,
      description:
        'Durable hi vis work pants',
      image: 'work-pants.jpg',
      price: 200,
      quantity: 0
    },
    {
      name: 'Grey Sweatpants',
      category: categories[2]._id,
      description:
        'A regular pair of grey sweat pants for around the house',
      image: 'grey-pants.jpg',
      price: 200,
      quantity: 0
    },
    {
      name: 'Navy Sweatpants',
      category: categories[2]._id,
      description:
        'A regular pair of navy sweat pants for around the house',
      image: 'navy-pants.jpg',
      price: 200,
      quantity: 0
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
