const auth = require('../auth');

const admin = (req, res, next) => {
  auth(req, res, () => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access denied. Admin role required.' });
    }
    next();
  });
};

module.exports = admin;
