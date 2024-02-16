const express = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const router = express.Router();

// Define a protected route
router.get('/api/protected', requireAuth, (req, res) => {
  // Here you can access req.user to use user information decoded from the JWT
  // For demonstration, we're simply returning a success message
  res.json({ message: "You have successfully accessed a protected route!", user: req.user });
});

module.exports = router;
