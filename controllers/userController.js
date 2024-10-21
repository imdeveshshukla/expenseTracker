const User = require('../models/User');
const { userSchema } = require('../validations/userValidation');

// Create User
const createUser = async (req, res) => {
  try {
    const validation = userSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json(validation.error.errors);
    }
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get User
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUser, getUser };
