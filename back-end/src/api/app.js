const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('../middleware/errorMiddleware');

const authRouter = require('../routes/authRouter');
const registerRouter = require('../routes/registerRouter');
const productRouter = require('../routes/productRouter');
const userRouter = require('../routes/userRouter');
const saleRouter = require('../routes/saleRouter');


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/login', authRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/sales', saleRouter);

app.use(errorMiddleware);

module.exports = app;
