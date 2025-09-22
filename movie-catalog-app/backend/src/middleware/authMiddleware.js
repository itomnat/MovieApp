const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Assuming you have a User model

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

const adminMiddleware = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
    next();
};

module.exports = {
    authMiddleware,
    adminMiddleware
};