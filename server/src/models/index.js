const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return file !== 'index.js'
  })
  .forEach((file) => {
    /*
      original code from Cody Seibert
      const model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
    */
    // sequelize.import is depreciated so return user in User.js and use require()
    const User = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[User.name] = User
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
