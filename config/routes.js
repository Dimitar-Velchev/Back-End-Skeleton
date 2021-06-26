const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
//to add prod controller

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
};
