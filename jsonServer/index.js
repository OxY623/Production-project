// import jsonServer from "json-server";
// import fs from "fs";
// import jwt from "jsonwebtoken";
// import path from "path";

const fs = require("fs");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.bodyParser); // Middleware для обработки JSON

server.use(async (request, response, next) => {
  await new Promise((res) => setTimeout(res, 1000));
  next();
});

server.use((request, response, next) => {
  if (!request.headers.authorization) {
    return response.status(401).json({message: "Not authorized"});
  }
  next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post("/login", (request, response) => {
  const {username, password} = request.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8"));
  const user = db.users.find((user) => user.username === username);

  if (user && user.password === password) {
    const token = jwt.sign({username}, "secret", {expiresIn: "1h"});
    response.json({token});
  } else {
    response.status(403).json({message: "Invalid credentials"});
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
