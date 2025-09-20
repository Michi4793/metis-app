import { Request, Response } from 'express';
import { adjustTasks, getRecommendations } from '../services/ai';

export class AIController {
    public async adjustUserTasks(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.userId;
            const adjustedTasks = await adjustTasks(userId);
            res.status(200).json(adjustedTasks);
        } catch (error) {
            res.status(500).json({ message: 'Error adjusting tasks', error });
        }
    }

    public async getTaskRecommendations(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.params.userId;
            const recommendations = await getRecommendations(userId);
            res.status(200).json(recommendations);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching recommendations', error });
        }
    }
}