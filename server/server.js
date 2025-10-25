const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let menu = [
 { id: 1, name: 'Americano', price: 150, category: 'coffee' },
{ id: 2, name: 'Cappuccino', price: 180, category: 'coffee' },
{ id: 3, name: 'Macchiato', price: 170, category: 'coffee' },
{ id: 4, name: 'Espresso', price: 140, category: 'coffee' },
{ id: 5, name: 'Latte', price: 190, category: 'coffee' },
{ id: 6, name: 'Iced Americano', price: 160, category: 'cold-coffee' },
{ id: 7, name: 'Iced Latte', price: 200, category: 'cold-coffee' },
{ id: 8, name: 'Iced Mocha', price: 220, category: 'cold-coffee' },
{ id: 9, name: 'Cold Brew', price: 210, category: 'cold-coffee' },
{ id: 10, name: 'Nitro Cold Brew', price: 230, category: 'cold-coffee' },
{ id: 11, name: 'Green Tea', price: 130, category: 'tea' },
{ id: 12, name: 'Hot Chocolate', price: 160, category: 'tea' },
{ id: 13, name: 'Iced Tea', price: 140, category: 'tea' },
{ id: 14, name: 'Chamomile Tea', price: 150, category: 'tea' },
{ id: 15, name: 'Lemon Ginger Tea', price: 150, category: 'tea' },
{ id: 16, name: 'Caramel Macchiato', price: 230, category: 'specialty' },
{ id: 17, name: 'Vanilla Latte', price: 210, category: 'specialty' },
{ id: 18, name: 'Hazelnut Mocha', price: 220, category: 'specialty' },
{ id: 19, name: 'Chai Latte', price: 200, category: 'specialty' },
{ id: 20, name: 'Matcha Latte', price: 240, category: 'specialty' },
{ id: 21, name: 'Croissant (Almond)', price: 120, category: 'snacks' },
{ id: 22, name: 'Croissant (Chocolate)', price: 130, category: 'snacks' },
{ id: 23, name: 'Croissant (Plain)', price: 110, category: 'snacks' },
{ id: 24, name: 'Blueberry Muffin', price: 100, category: 'snacks' },
{ id: 25, name: 'Chocolate Muffin', price: 100, category: 'snacks' },
{ id: 26, name: 'Scone (Lemon)', price: 90, category: 'snacks' },
{ id: 27, name: 'Scone (Cranberry)', price: 95, category: 'snacks' },
{ id: 28, name: 'Cookie (Chocolate Chip)', price: 80, category: 'snacks' },
{ id: 29, name: 'Cookie (Oatmeal)', price: 80, category: 'snacks' },
{ id: 30, name: 'Bagel (Cream Cheese)', price: 110, category: 'snacks' },

];

let orders = [];

app.get('/api/menu', (req, res) => res.json(menu));

app.post('/api/orders', (req, res) => {
  const { user, items } = req.body;
  const newOrder = { user, items, status: 'Placed' };
  orders.push(newOrder);
  res.status(201).json({ message: 'Order placed' });
});

app.get('/api/orders/:user', (req, res) => {
  const userOrders = orders.filter(o => o.user === req.params.user);
  res.json(userOrders);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));