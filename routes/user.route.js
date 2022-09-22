const route = require('express').Router();

const renderTemplate = require('../lib/renderReactModule');

// const SignInForm = require('../views/SignInForm');
// const SignUpForm = require('../views/SignUpForm');
const Main = require('../views/Main');

const { checkUserInBase } = require('../middleware/checkUserInBase.middleware');
const checkUser = require('../middleware/checkUser.middleware');

const { User } = require('../db/models');

// регистрация
route.get('/red', (req, res) => {
  renderTemplate(Main, null, res);
});

route.post('/red', checkUserInBase, async (req, res) => {
  const { password, email, username } = req.body;
  const userCreate = await User.create({
    password,
    email,
    username,
  });
  res.redirect('/');
});

// авторизация
route.get('/log', (req, res) => {
  renderTemplate(Main, {}, res);
});

route.post('/log', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user) {
    if (req.body.password === user.password) {
      req.session.email = user.email;
      req.session.userId = user.id;
      req.session.username = user.username;
      res.redirect('/search');
    } else {
      return res.send('wrong password');
    }
  } else {
    return res.send('wrong login');
  }
});

// кнопочка логаут - убьёт текущую сессию
route.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
route.get('/', (req, res) => {
  renderTemplate(Main, null, res);
});

// поиск на юзера в бд
route.get('/:id', checkUser, async (req, res) => {
  const user = await User.findByPk(req.params.id);
  //console.log('userRout',user);
  if (user) {
    renderTemplate(Main, { user }, res);
  } else {
    res.redirect('/');
  }
});

module.exports = route;
