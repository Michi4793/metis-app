import { Router } from 'express';
import ProfileController from '../controllers/profile';

const router = Router();
const profileController = new ProfileController();

router.get('/:userId', profileController.viewProfile);
router.put('/:userId', profileController.updateProfile);

export default router;