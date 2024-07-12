require("dotenv").config();

const sequelize = require("./db/connection");
require("./models");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

var inquirer = require("inquirer");
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

const init = async () => {
  // sync db
  await sequelize.sync({ force: false });
  console.log("DB connected!");

  // start server
  app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
};

init();
