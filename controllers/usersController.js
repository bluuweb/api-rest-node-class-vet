const { response } = require("express");

const usersGet = (req, res = response) => {
    res.json({ msg: "funcionando controller" });
};

module.exports = {
    usersGet,
};
