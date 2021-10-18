const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares() {
        // this.app.use(cors);
        this.app.use(express.static("public"));
    }

    routes() {
        // this.app.use("/api/users", require("../routes/user"));

        readdirSync("./routes").map((r) =>
            this.app.use("/api", require("../routes/" + r))
        );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor andando en el puerto 👍 " + this.port);
        });
    }
}

module.exports = Server;
