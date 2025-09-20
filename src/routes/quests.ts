import { Router } from 'express';
import { QuestsController } from '../controllers/quests';

const router = Router();
const questsController = new QuestsController();

// Route to create a new quest
router.post('/', questsController.createQuest);

// Route to get all quests
router.get('/', questsController.getAllQuests);

// Route to get a specific quest by ID
router.get('/:id', questsController.getQuestById);

// Route to update a quest by ID
router.put('/:id', questsController.updateQuest);

// Route to delete a quest by ID
router.delete('/:id', questsController.deleteQuest);

// Route to track quest completion
router.post('/:id/complete', questsController.completeQuest);

export default router;