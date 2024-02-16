const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers, deleteUser } = require('../controllers/userController');
const {requireAuth} = require('../middleware/authMiddleware'); // Ensure this middleware is implemented correctly

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', requireAuth, getAllUsers); // Protect this route
router.delete('/:id', requireAuth, deleteUser); // Protect this route as well

module.exports = router;

