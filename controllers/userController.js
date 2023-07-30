const db = require('../models');
const User = db.users;
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    dob: req.body.dob,
  };

  const user = await User.create(data);
  res.status(200).send(user);
};







const login = async (req, res) => {
  const secretKey = process.env.SECRET_KEY;
  let user = {
    email: req.body.email,
    password: req.body.password,
  };

  jwt.sign({ user }, secretKey, { expiresIn:'300s' },(err, token) => {
    res.json({
      token
    })
  })
};









const fetchAllUsers = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).send(users);
};

const showUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({
    where: {
      id: id,
    },
  });
  res.status(200).send(user);
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  const user = await User.update(req.body, {
    where: {
      id: id,
    },
  });
  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).send('User is deleted!');
};

module.exports = {
  signUp,
  login,
  fetchAllUsers,
  showUser,
  updateUser,
  deleteUser
};
