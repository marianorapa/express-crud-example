const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

// Add tutorial routes
require("./app/routes/tutorial.routes")(app);

// Sync DB in development
const db = require("./app/models");
if (process.env.NODE_ENV == 'development'){
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
}
else {
  console.log("Not running on development mode - DB won't sync");
}

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});