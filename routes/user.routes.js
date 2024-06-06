const { Router } = require("express");
const validateUser = require("../middleware/userValidation.middleware");
const {
  getUsers,
  createUser,
  updateUser,
  getUser,
  deleteUser,
} = require("../controller/user.controller");

const router = Router();
router.get("/", getUsers);
router.post("/user", validateUser, createUser);

router
  .route("/user/:userId")
  .get(getUser)
  .put(validateUser, updateUser)
  .delete(deleteUser);
module.exports = router;
