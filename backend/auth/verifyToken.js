import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

const decodeToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  try {
    const token = authToken.split(" ")[1];
    const decoded = decodeToken(token);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token is expired' });
    }

    return res.status(401).json({ success: false, message: 'Invalid Token' });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;
  let user;

  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);

  user = patient || doctor;

  if (!roles.includes(user?.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You're not authorized" });
  }

  next();
};
