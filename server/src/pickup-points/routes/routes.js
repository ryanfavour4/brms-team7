const { Router } = require("express");
const controls = require("../controllers/controller");

const router = Router();

router.get("/", controls.getAllPickupPoint);

router.get("/locations", controls.getPickUpPointWithName);

router.get("/:id", controls.getAllPickupPointsWithLocationId);


module.exports = router;
