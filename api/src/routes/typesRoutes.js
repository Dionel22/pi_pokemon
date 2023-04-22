const { Router } = require("express");
const  handleTypes  = require("../handles/typeHandles")

const routerTypes = Router()

   routerTypes.get("/", handleTypes)

module.exports = routerTypes;