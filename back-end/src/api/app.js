const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('../middleware/errorMiddleware');

const authRouter = require('../routes/authRouter');
const registerRouter = require('../routes/registerRouter');
const productRouter = require('../routes/productRouter');
<<<<<<< HEAD
=======
const userRouter = require('../routes/userRouter');
>>>>>>> d6e21aa308801e970ade7825d72ba6ced496fb0e

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', authRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);
<<<<<<< HEAD
=======
app.use('/users', userRouter);
>>>>>>> d6e21aa308801e970ade7825d72ba6ced496fb0e

app.use(errorMiddleware);

module.exports = app;
