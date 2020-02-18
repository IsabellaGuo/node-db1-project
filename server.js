const express = require('express');

const db = require('./data/dbConfig');
const AccountsRouter = require ('./accounts/router');

const server = express();

server.use(express.json());
server.use("/api/accounts", AccountsRouter);

module.exports = server;