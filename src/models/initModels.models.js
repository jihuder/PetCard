const Users = require("./users");
const Pets = require("./pets");
const PetsVaccinated = require("./petsVaccinated");
const vaccines = require("./vaccines");

const initModels = () => {
  Users.hasMany(Pets);
  Pets.belongsTo(Users);

  Pets.hasMany(PetsVaccinated);
  PetsVaccinated.belongsTo(Pets);

  vaccines.hasMany(PetsVaccinated);
  PetsVaccinated.belongsTo(vaccines);
};

module.exports = initModels;
