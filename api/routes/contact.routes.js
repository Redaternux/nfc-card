
const express = require("express");
const router = express.Router();
const contact = require("../controllers/contact.controller.js");
const { multerMiddleware,authJwt }=require("../middleware")

  router.post("/", contact.createOne);

  

module.exports = router;
