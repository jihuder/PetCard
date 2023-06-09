const Vaccine = requeri("../models/vaccine.js");

const findAllVaccine = async () => {
  const data = await Vaccine.findAll();
  return data;
};

const findVaccineById = async (id) => {
  const data = await Vaccine.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createVaccines = async (userObj) => {
  const newUser = {
    title: userObj.title,
  };
  const data = await Vaccine.create(newUser);
  return data;
};

const deleteVaccines = async (id) => {
  const data = await Vaccine.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllVaccine,
  findVaccineById,
  createVaccines,
  deleteVaccines
};
