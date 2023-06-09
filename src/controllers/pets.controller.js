const Pets = require("../models/pets.js");

const findAllPets = async () => {
  const data = await Pets.findAll();
  return data;
};

const findPetsById = async (id) => {
  const data = await Pets.findOne({
    where: {
      id: id,
    },
  });
};

const createPets = async (petsObj) => {
  const newPets = {
    name: petsObj.name,
    race: petsObj.race,
    isVaccinated: petsObj.isVaccinated
  };
  const data = await Pets.create(newPets);
  return data;
};


const updatePet = async (id, petObj) => {
  const data = await Pets.update(petObj, {
    where: {
      id: id
    }
  });
  return data[0]
}

const deletePets = async (id) => {
  const data = await Pets.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllPets,
  findPetsById,
  createPets,
  updatePet,
  deletePets,
};
