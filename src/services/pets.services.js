  const petsController = require("../controllers/pets.controller");
const handleResponces = require("../utils/handleResponses");
const getALLPets = (req, res) => {
  petsController
    .findAllPets()
    .then((data) => {
      handleResponces.success({
        res,
        status: 200,
        data: data,
        message: "the request was successful",
      });
    })
    .catch((err) => {
      handleResponces.error({
        res,
        status: 404,
        message: " something bad",
        data: err,
      });
    });
};

const getPetsById = (req, res) => {
  const id = req.params.id;
  petsController
    .findPetsById(id)
    .then((data) => {
      if (data) {
        handleResponces.success({
          res,
          status: 200,
          message: "the request was successful",
          data: data,
        });
      } else {
        handleResponces.error({
          res,
          status: 404,
          message: "the request was not found",
        });
      }
    })
    .catch((err) => {
      handleResponces.error({
        res,
        message: "something bad getting the user",
        status: 400,
        data: err,
      });
    });
};

const postPet = (req, res) => {
  const newPet = {
    name: req.body.name,
    race: req.body.race,
    isVaccinated: req.body.isVaccinated,
  };
  petsController
    .createPets(newPet)
    .then((data) => {
      if (data) {
        handleResponces.success({
          res,
          status: 200,
          message: "the request was successful",
          data: data,
        });
      } else {
        handleResponces.error({
          res,
          status: 404,
          message: "pet not created",
        });
      }
    })
    .catch((err) => {
      handleResponces.error({
        res,
        status: 400,
        message: "something bad",
        fields: {
          name: "string",
          race: "string",
          isVaccinated: "bool",
        }, 
        data: err
      });
    });
};

const patchPet = (req, res) => {
  const id = req.params.id;
  const petPatched = req.body;
  petsController
    .updatePet(id, petPatched)
    .then((data) => {
      if (data) {
        handleResponces.success({
          res,
          status: 201,
          message: " the request was successful",
          data: data,
        });
      } else {
        handleResponces.error({
          res,
          status: 404,
          fields: {
            name: "String",
            race: "String",
            isVaccinated: "bool",
          },
        });
      }
    })
    .catch((err) => {
      handleResponces.error({
        res,
        status: 400,
        data: err,
        message: `Error ocurred trying to update user with id ${id}`,
        fields: {
          name: "String",
          race: "String",
          isVaccinated: "bool",
        },
      });
    });
};

const deletePet = (req, res) => {
  const id = req.params.id;
  petsController
    .deletePets(id)
    .then((data) => {
      if (data) {
        handleResponces.success({
          res,
          status: 204,
          message: `pet with id: ${id} deleted successfully`,
        });
      } else {
        handleResponces.error({
          res,
          status: 404,
          message: `pet with id: ${id} not found`,
        });
      }
    })
    .catch((err) => {
      handleResponces({
        res,
        status: 400,
        message: `Error occurred trying to delete pet with id: ${id}}`,
        data: err,
      });
    });
};

module.exports = {
  getALLPets,
  getPetsById,
  postPet,
  patchPet,
  deletePet,
}
