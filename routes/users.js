const router = require("express").Router();

const { usersGet } = require("../controllers/usersController");

router.get("/users", usersGet);

module.exports = router;
