import { Router } from 'express';
import JournalController from '../controllers/journal';

const router = Router();
const journalController = new JournalController();

// Route to create a new journal entry
router.post('/', journalController.createEntry.bind(journalController));

// Route to get all journal entries
router.get('/', journalController.getEntries.bind(journalController));

// Route to get a specific journal entry by ID
router.get('/:id', journalController.getEntryById.bind(journalController));

// Route to update a journal entry by ID
router.put('/:id', journalController.updateEntry.bind(journalController));

// Route to delete a journal entry by ID
router.delete('/:id', journalController.deleteEntry.bind(journalController));

export default router;