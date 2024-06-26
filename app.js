const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

const items = [];

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Items API',
      version: '1.0.0',
      description: 'A simple CRUD API for items',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the item
 *         price:
 *           type: number
 *           description: The price of the item
 */

/**
 * @swagger
 * /item:
 *   post:
 *     summary: Create a new item
 *     tags: [Item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: The item was successfully created
 */
app.post('/item', (req, res) => {
  const item = {
    name: req.body.name,
    price: req.body.price,
  };
  items.push(item);
  res.status(201).json(item);
});

/**
 * @swagger
 * /item/{name}:
 *   get:
 *     summary: Get an item by name
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the item
 *     responses:
 *       200:
 *         description: The item description by name
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: The item was not found
 */
app.get('/item/:name', (req, res) => {
  const item = items.find(i => i.name === req.params.name);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

/**
 * @swagger
 * /item/{name}:
 *   put:
 *     summary: Update an item by name
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The item was successfully updated
 *       201:
 *         description: The item was successfully created
 */
app.put('/item/:name', (req, res) => {
  const item = items.find(i => i.name === req.params.name);
  if (item) {
    item.price = req.body.price;
    res.json(item);
  } else {
    const newItem = {
      name: req.params.name,
      price: req.body.price,
    };
    items.push(newItem);
    res.status(201).json(newItem);
  }
});

/**
 * @swagger
 * /item/{name}:
 *   delete:
 *     summary: Remove an item by name
 *     tags: [Item]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the item
 *     responses:
 *       200:
 *         description: The item was successfully deleted
 */
app.delete('/item/:name', (req, res) => {
  const index = items.findIndex(i => i.name === req.params.name);
  if (index !== -1) {
    items.splice(index, 1);
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
