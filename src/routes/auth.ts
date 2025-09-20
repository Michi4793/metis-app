import { Router } from 'express';
import { AuthController } from '../controllers/auth';

const router = Router();
const authController = new AuthController();

// User registration
router.post('/register', authController.register);

// User login
router.post('/login', authController.login);

// User logout
router.post('/logout', authController.logout);

export default router;