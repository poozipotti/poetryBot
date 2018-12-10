const poemRoutes = require("./poems");
const path = require("path");
const constructorMethod = (app) => {
    app.use("/poems", poemRoutes);
};

module.exports = constructorMethod;
