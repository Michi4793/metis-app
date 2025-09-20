import { Router } from 'express';
import AIController from '../controllers/ai';

const router = Router();
const aiController = new AIController();

router.post('/adjust-tasks', aiController.adjustTasks);
router.get('/recommendations', aiController.getRecommendations);

export default router;