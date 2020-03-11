const express = require('express');
const helmet = require("helmet");
const logger = require('morgan');

const server = express();
const projectRoutes = require("./routes/project-route");
const resourceRoutes = require("./routes/resource-route");
const taskRoutes = require("./routes/task-route");

server.use(helmet());
server.use(logger('tiny'));
server.use(express.json());
server.use("/api/projects", projectRoutes);
server.use("/api/resources", resourceRoutes);
server.use("/api/tasks", taskRoutes);


server.use((req,res,next) => {msg:'Route Not Found'});
server.use((err,req,res,next) => {msg:'Error-500-something went wrong'});

module.exports = server;