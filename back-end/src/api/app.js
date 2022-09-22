const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('../middleware/errorMiddleware');

const authRouter = require('../routes/authRouter');
const registerRouter = require('../routes/registerRouter');
const productRouter = require('../routes/productRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', authRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);

app.use(errorMiddleware);

module.exports = app;
