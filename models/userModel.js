module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Invalid email format",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8,],
          msg: "Password should be minimum 8 characters",
        },
      },
    },
    dob: {
      type: DataTypes.DATE,
    },
  });

  return User;
};
