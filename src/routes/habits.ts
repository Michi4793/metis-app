import { Router } from 'express';
import HabitController from '../controllers/habits';

const router = Router();
const habitController = new HabitController();

router.post('/', habitController.createHabit.bind(habitController));
router.get('/', habitController.getAllHabits.bind(habitController));
router.get('/:id', habitController.getHabitById.bind(habitController));
router.put('/:id', habitController.updateHabit.bind(habitController));
router.delete('/:id', habitController.deleteHabit.bind(habitController));

export default router;