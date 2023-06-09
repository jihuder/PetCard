const router = require("express").Router();
const userServices = require("../services/users.services");
const passportJwt = require("../middlewares/auth.middleware");

router.route("/")
  .get(userServices.getAllUsers).post(userServices.postUser);

router.route("/me")
  .get(passportJwt, userServices.getMyUser)
  .patch(passportJwt, userServices.patchMyUser)
  .delete(passportJwt, userServices.deleteMyUser);
  
router
  .route("/:id")
  .get(userServices.getUserById)
  .patch(userServices.putUser)
  .delete(userServices.deleteUser);

module.exports = router;
