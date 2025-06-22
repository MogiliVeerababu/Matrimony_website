const express = require('express');
const router = express.Router();
const { registerUser, getAllUsers, updateUser, deleteUser, verifyEmail, loginUser, forgotPassword, resetPassword } = require('../controllers/userController');

router.post('/register', registerUser);
router.get('/verify/:token', verifyEmail);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.get('/', getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
