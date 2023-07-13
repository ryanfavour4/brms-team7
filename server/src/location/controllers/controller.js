const pool = require("../../../dbconnect");
const q = require("../helpers/queries");
const hasSpecialCharacters = require("../../../utils/hasSpecialCharacters");
const { v4: uuidv4 } = require("uuid");

// ? GET / get all pickup points
const getAllLocations = (req, res) => {
  pool.query(q.getAllLocations, (error, result) => {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(result.rows);
    res.status(200).json(result.rows);
  });
};

// ? GET / get pickup points by id
const getLocationById = (req, res) => {
  const id = req.params.id;
  if (hasSpecialCharacters(id) || isNaN(id)) {
    const errorMessage = 'Invalid data received. Only Numbers are valid here.';
    res.status(400).json({ error: errorMessage });
    return false;
  }
  pool.query(q.getLocationById, [id], (error, result) => {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(result.rows);
    res.status(200).json(result.rows);
  });
};

module.exports = {
  getAllLocations,
  getLocationById
};
