import express from 'express';
import { registerUser, loginUser, getProfile } from '../controllers/UserController';
import auth from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', auth, getProfile);

export default router;