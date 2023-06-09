const router = require('express').Router()
const petsServices = require('../services/pets.services')

router.route('/')
  .get(petsServices.getALLPets)
  .post(petsServices.postPet)

router.route('/:id')
  .get(petsServices.getPetsById)
  .patch(petsServices.patchPet)
  .delete(petsServices.deletePet)

  module.exports = router