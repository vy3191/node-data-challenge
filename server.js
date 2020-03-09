const express = require('express');
const helmet = require("helmet");
const logger = require('morgon');

const server = express();

server.use(helmet());
server.use(logger('tiny'));
server.use(express.json());

server.use((req,res,next) => {msg:'Route Not Found'});
server.use((err,req,res,next) => {msg:'Error-500-something went wrong'});

module.exports = server;