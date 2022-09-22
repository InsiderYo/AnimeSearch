const { User } = require('../db/models');

const checkUserInBase = async (req, res, next) => {
  try {
    const { username } = req.body;
    console.log(req.body);
    const findUser = await User.findOne({ where: { username } });
    console.log(username);
    if (findUser) {
      res.redirect('/');
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { checkUserInBase };
