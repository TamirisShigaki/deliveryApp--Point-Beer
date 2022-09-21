const express = require('express');
require('express-async-errors');

const authRouter = require('../routes/authRouter');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', authRouter);

app.get('/', (_req, res) => res.status(418).send('entrou'));

module.exports = app;
