const { Router } = require("express");
const controls = require("../controllers/controller");

const router = Router();

router.get("/", controls.getAllLocations);

router.get("/:id", controls.getLocationById);

module.exports = router;
