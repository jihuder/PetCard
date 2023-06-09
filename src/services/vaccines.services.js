const VaccinesController = require("../controllers/vaccines.controller");
const handleResponses = require("../utils/handleResponses");

const getVaccineById = (req, res) => {
  const id = req.params.id;
  VaccinesController.findVaccineById(id)
    .then((data) => {
      if (data) {
        handleResponses.success({
          res,
          status: 200,
          message: "the request was successful",
          data: data,
        });
      } else {
        handleResponses.error({
          res,
          status: 404,
          message: "the id not found",
        });
      }
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 400,
        message: `error getting the vaccine by id: ${id}`,
        data: err
      })
    })
};

const getAllVaccine = (req, res) => {
  VaccinesController.findAllVaccine()
    .then((data) => {
      if (data) {
        handleResponses.success({
          res,
          status: 200,
          message: "the request was successful",
          data: data,
        });
      } else {
        handleResponses.error({
          res,
          status: 404,
          message: "the id not found",
        });
      }
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 400,
        message: `failure to obtain all vaccines`,
        data: err
      })
    })
}

const postCreateVaccines = (req, res) => {
  let newObjVaccine = {
    title: req.body.title
  }

  VaccinesController.createVaccines(newObjVaccine)
    .then((data) => {
      handleResponses.success({
        res,
        status: 201,
        message: "Vaccines created successfully",
        data: data,
      });
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 404,
        message: "the Vaccines was not created successfully",
        fields: {},
        data: err,
      });
    });
}

const deleteVaccinesId = (req, res) => {
  const id = req.params.id;
  VaccinesController.deleteVaccines(id)
    .then((data) => {
      if (data) {
        handleResponses.success({
          res,
          status: 200,
          message: "the request was successful",
          data: data,
        });
      } else {
        handleResponses.error({
          res,
          status: 404,
          message: "the id not found",
        });
      }
    })
    .catch((err) => {
      handleResponses.error({
        res,
        status: 400,
        message: `error remove vaccine by id: ${id}`,
        data: err
      })
    })
}




module.exports = {
  getVaccineById,
  getAllVaccine,
  postCreateVaccines,
  deleteVaccinesId
}
