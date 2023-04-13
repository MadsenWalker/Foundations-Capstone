require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    })

const templates = require("./db.json");

module.exports = {
  getAllWeeks: (req, res) => {

 sequelize.query(`select * from cc_week`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 

  editTemplate: (req, res) => {
    res.status(200).send(something);
  },
};
