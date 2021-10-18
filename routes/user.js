const router = require("express").Router();

router.get("/users", (req, res) => {
    console.log("entró");
    res.json({ mensaje: "Funcionando!" });
});

module.exports = router;
