const getAllLocations = "SELECT * FROM location";
const getLocationById = "SELECT * FROM location WHERE location_id = $1"

// const getUserByID = "SELECT * FROM users WHERE id = $1";
// const addUser = "INSERT INTO users (firstname , lastname, age, uuid, created, location) VALUES ($1, $2, $3, $4, $5, $6)";


module.exports = {
    getAllLocations,
    getLocationById
}