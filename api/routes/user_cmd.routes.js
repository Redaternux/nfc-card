
const express = require("express");
const router = express.Router();
const user_cmd = require("../controllers/user_cmd.controller.js");
const { multerMiddleware,authJwt }=require("../middleware")

  router.post("/", user_cmd.createOne);

module.exports = router;
