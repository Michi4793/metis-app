import { Request, Response } from 'express';
import Journal from '../models/journal';

class JournalController {
    async createEntry(req: Request, res: Response) {
        const { content, userId } = req.body;
        try {
            const newEntry = new Journal({ content, user: userId });
            await newEntry.save();
            res.status(201).json(newEntry);
        } catch (error) {
            res.status(500).json({ message: 'Error creating journal entry', error });
        }
    }

    async getEntries(req: Request, res: Response) {
        const { userId } = req.params;
        try {
            const entries = await Journal.find({ user: userId });
            res.status(200).json(entries);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving journal entries', error });
        }
    }
}

export default JournalController;