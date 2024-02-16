const jwt = require('jsonwebtoken');

exports.requireAuth = (req, res, next) => {
  // const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN

  // if (!token) {
  //   return res.status(401).json({ message: "Authorization required" });
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   req.user = decoded; // Add user payload to request object
  //   next();
  // } catch (error) {
  //   res.status(401).json({ message: "Invalid or expired token" });
  // }
  next();
};
