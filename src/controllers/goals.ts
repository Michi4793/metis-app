import { Request, Response } from 'express';
import { Goal } from '../models/goal';

export class GoalsController {
    public async createGoal(req: Request, res: Response): Promise<void> {
        const { title, description } = req.body;
        const newGoal = new Goal({ title, description, completed: false });
        await newGoal.save();
        res.status(201).json(newGoal);
    }

    public async getGoals(req: Request, res: Response): Promise<void> {
        const goals = await Goal.find();
        res.status(200).json(goals);
    }

    public async updateGoal(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const updatedGoal = await Goal.findByIdAndUpdate(id, { title, description, completed }, { new: true });
        if (!updatedGoal) {
            res.status(404).json({ message: 'Goal not found' });
            return;
        }
        res.status(200).json(updatedGoal);
    }

    public async deleteGoal(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const deletedGoal = await Goal.findByIdAndDelete(id);
        if (!deletedGoal) {
            res.status(404).json({ message: 'Goal not found' });
            return;
        }
        res.status(204).send();
    }
}