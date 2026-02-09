const jwt = require("jsonwebtoken");

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  // If token missing
  if (!authHeader) {
    return res.status(401).json({ message: "Access denied. No token." });
  }

  try {
    // Remove 'Bearer '
    const token = authHeader.replace("Bearer ", "");

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store user ID in request
    req.user = decoded;

    next(); // move to route
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
