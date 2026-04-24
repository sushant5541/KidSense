import jwt from 'jsonwebtoken';
import config from '../config/index.js';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, error: 'Not authorized to access this route' });
    }

    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Add user to request
    req.user = await User.findById(decoded.id).select('-password');
    
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'User not found' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: 'Not authorized' });
  }
};
