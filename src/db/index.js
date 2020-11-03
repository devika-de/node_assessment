const { Sequelize, DataTypes } = require("sequelize");
 require('dotenv').config();

 
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "assessment",
  sync: true,
});

const blogs = require("./models/blogs")(sequelize);
const users = require("./models/users")(sequelize);

const init = async function () {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log("db > init > ", error);
  }
};

module.exports = {
  init,
  users,
  blogs,
  sequelize,
};
