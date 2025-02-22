const fs = require("fs");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

// Подключаем CORS middleware
const cors = require("cors");
server.use(cors()); // Включаем CORS, чтобы разрешить кросс-доменные запросы

server.use(jsonServer.bodyParser); // Middleware для обработки JSON

server.use(async (request, response, next) => {
  await new Promise((res) => setTimeout(res, 1000)); // Задержка для симуляции ожидания
  next();
});

// Пропускаем проверку авторизации для /login

server.use((request, response, next) => {
  if (request.url.startsWith("/login")) {
    return next();
  }

  const token = request.headers.authorization?.split(" ")[1];

  // Если нет заголовка authorization, возвращаем 401
  // if (!request.headers.authorization) {
  //   return response.status(401).json({message: "Not authorized"});
  // }
  if (!token) {
    return response.status(401).json({message: "Not authorized"});
  }

  try {
    const decoded = jwt.verify(token, "secret");
    request.user = decoded;
  } catch (error) {
    return response.status(401).json({message: "Invalid token"});
  }

  next();
});

// Настройка jsonServer.defaults() после маршрута /login
server.use(jsonServer.defaults());

// Ваш маршрут /login
server.post("/login", (request, response) => {
  const {username, password} = request.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8"));
  const user = db.users.find((user) => user.username === username);

  if (user && user.password === password) {
    const token = jwt.sign({username}, "secret", {expiresIn: "1h"});
    response.json({user, token});
  } else {
    response.status(403).json({message: "Invalid credentials"});
  }
});

server.get("/me", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({message: "Not authorized"});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "secret"); // Расшифровка токена
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8"));
    const user = db.users.find((u) => u.username === decoded.username);

    if (!user) {
      return res.status(401).json({message: "Invalid token"});
    }

    res.json({user});
  } catch (e) {
    res.status(401).json({message: "Invalid token"});
  }
});

// Подключаем основной роутер для других запросов
server.use(router);

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
