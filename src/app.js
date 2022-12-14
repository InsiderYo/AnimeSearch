require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// const { sequelize } = require('../db/models');
const renderTemplate = require('../lib/renderReactModule');
const Search = require('../views/Search');
const Main = require('../views/Main');

const userRoute = require('../routes/user.route'); //регистер и авторизэйшн

const app = express();

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const { PORT, SESSION_SECRET } = process.env;

const sessionConfig = {
  name: 'your coockie name', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'your key', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};

app.use(session(sessionConfig));

app.use((req, res, next) => {
  app.locals.username = req.session?.username; // User.firstname
  app.locals.userId = req.session?.userId; // userId уточнить при создании юзера!!!
  next();
});

app.get('/search', (req, res) => {
  const user = req.session?.username;
  renderTemplate(Search, { user }, res);
});

// app.get('/', (req, res) => {
//   const user = req.session?.username;
//   renderTemplate(Main, { user }, res);
// });
app.use('/', userRoute);

app.listen(PORT, async () => {
  console.log(`Сервер поднят на ${PORT} порту!`);
});
