const getAllPickUpPoints = "SELECT * FROM pickup_point";
const getPickUpPointWithName =
  "SELECT p.*, l.title AS location_name FROM pickup_point p JOIN location l ON p.location = location_id";
  
const getAllPickupPointsWithLocationId = "SELECT * FROM pickup_point WHERE location = $1"


  // const getUserByID = "SELECT * FROM users WHERE id = $1";
// const addUser = "INSERT INTO users (firstname , lastname, age, uuid, created, location) VALUES ($1, $2, $3, $4, $5, $6)";

module.exports = {
  getAllPickUpPoints,
  getPickUpPointWithName,
  getAllPickupPointsWithLocationId
};
