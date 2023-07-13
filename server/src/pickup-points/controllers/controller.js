const pool = require("../../../dbconnect");
const q = require("../helpers/queries");
const hasSpecialCharacters = require("../../../utils/hasSpecialCharacters");
const { v4: uuidv4 } = require("uuid");

// ? GET / get all pickup points
const getAllPickupPoint = (req, res) => {
  pool.query(q.getAllPickUpPoints, (error, result) => {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(result.rows);
    res.status(200).json(result.rows);
  });
};

// ? GET / get all pickup points with location names
const getPickUpPointWithName = async (req, res) => {
  try {
    const result = await pool.query(q.getPickUpPointWithName);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching Pickup Points data:", error);
    res.status(500).send("Internal Server Error");
  }
};

// ? GET / get all pickup points with location id
const getAllPickupPointsWithLocationId = async (req, res) => {
  const id = req.params.id;
  if (hasSpecialCharacters(id) || isNaN(id)) {
    const errorMessage = "Invalid data received. Only Numbers are valid here.";
    res.status(400).json({ error: errorMessage });
    return false;
  }
  try {
    pool.query(q.getAllPickupPointsWithLocationId, [id], (error, result) => {
      if (error) throw error;
      console.log(result.rows);
      res.status(200).json(result.rows);
    });
  } catch (error) {
    console.error("Error fetching Pickup Points data:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllPickupPoint,
  getPickUpPointWithName,
  getAllPickupPointsWithLocationId
};
