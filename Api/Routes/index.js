const express = require("express")
const Router = express.Router();
const userRoutes = require("./Users")
const postRoutes = require("./Posts")
const authroutes = require("./Auth")
const CategoryRoutes = require("./Categories")



module.exports = () => {
    Router.use("/posts",postRoutes)
    Router.use("/Categories",CategoryRoutes)
    Router.use("/users",userRoutes)
    Router.use("/auth",authroutes)
    return Router;
}