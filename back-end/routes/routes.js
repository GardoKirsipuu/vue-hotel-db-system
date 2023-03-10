// import express
import express from "express";
 
// import function from controller
import { showHotels, showHotelByName, createHotel, deleteHotel, showHotelById, showHotelsByOwnerId } from "../controllers/hotel.js";
import { createRoom, showRoomsByHotelId } from "../controllers/room.js";
import { createUser, loginUser, logoutUser } from "../controllers/user.js";
import { createReservation, deleteReservation, showUserReservations } from "../controllers/reservation.js";
import { uploadImage } from '../controllers/images.js'
import { payInvoice } from "../controllers/invoice.js";
 
// init express router
const router = express.Router();
 
// Get All hotels
router.get('/hotels', showHotels);
 
// Get single hotel by id
router.get('/hotels/:id', showHotelById)

// Get Single hotel by name
router.get('/hotels/:name', showHotelByName);
 
// Add hotel
router.post('/hotels', createHotel);

// Delete hotel
router.delete('/hotels/:id', deleteHotel);

/* Update Product
router.put('/products/:id', updateProduct);
 */

// Add room
router.post('/rooms', createRoom);

// Get rooms by hotel ID
router.get('/rooms/:id', showRoomsByHotelId)

// Get rooms for owner
router.get('/owner', showHotelsByOwnerId)
 
// Add user
router.post('/users', createUser);

// Login
router.post('/sessions', loginUser);

// Log out
router.delete('/sessions', logoutUser)

// Add reservation
router.post('/reservations', createReservation)

// Get user reservations
router.get('/reservations', showUserReservations)

// cancel reservation
router.delete('/reservations/:id', deleteReservation)

// upload images
router.post('/upload', uploadImage)

// pay invoice
router.post('/invoice', payInvoice)
 
// export default router
export default router;