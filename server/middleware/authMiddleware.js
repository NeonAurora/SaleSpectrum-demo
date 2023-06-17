// ./middleware/authMiddleware.js
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedData?.id;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Token verification failed. Authorization denied." });
  }
};

export default authMiddleware;
