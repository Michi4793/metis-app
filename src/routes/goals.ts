import { Router } from 'express';
import { GoalsController } from '../controllers/goals';

const router = Router();
const goalsController = new GoalsController();

// Route to create a new goal
router.post('/', goalsController.createGoal.bind(goalsController));

// Route to get all goals
router.get('/', goalsController.getAllGoals.bind(goalsController));

// Route to update a specific goal by ID
router.put('/:id', goalsController.updateGoal.bind(goalsController));

// Route to delete a specific goal by ID
router.delete('/:id', goalsController.deleteGoal.bind(goalsController));

// Route to get a specific goal by ID
router.get('/:id', goalsController.getGoalById.bind(goalsController));

export default router;