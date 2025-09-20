import { Request, Response } from 'express';
import Quest from '../models/quest';

export default class QuestsController {
    public async createQuest(req: Request, res: Response): Promise<Response> {
        const { title, description } = req.body;
        const newQuest = new Quest({ title, description, completed: false });
        await newQuest.save();
        return res.status(201).json(newQuest);
    }

    public async getQuests(req: Request, res: Response): Promise<Response> {
        const quests = await Quest.find();
        return res.status(200).json(quests);
    }

    public async updateQuest(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const updatedQuest = await Quest.findByIdAndUpdate(id, { title, description, completed }, { new: true });
        return res.status(200).json(updatedQuest);
    }

    public async deleteQuest(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        await Quest.findByIdAndDelete(id);
        return res.status(204).send();
    }

    public async trackQuest(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const quest = await Quest.findById(id);
        if (!quest) {
            return res.status(404).json({ message: 'Quest not found' });
        }
        quest.completed = true;
        await quest.save();
        return res.status(200).json(quest);
    }
}