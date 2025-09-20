import { Request, Response } from 'express';
import { Habit } from '../models/habit';

export class HabitController {
    public async createHabit(req: Request, res: Response): Promise<Response> {
        const { name, difficulty } = req.body;
        const newHabit = new Habit({ name, difficulty });
        await newHabit.save();
        return res.status(201).json(newHabit);
    }

    public async updateHabit(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const updates = req.body;
        const updatedHabit = await Habit.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedHabit) {
            return res.status(404).json({ message: 'Habit not found' });
        }
        return res.json(updatedHabit);
    }

    public async deleteHabit(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const deletedHabit = await Habit.findByIdAndDelete(id);
        if (!deletedHabit) {
            return res.status(404).json({ message: 'Habit not found' });
        }
        return res.status(204).send();
    }

    public async getHabits(req: Request, res: Response): Promise<Response> {
        const habits = await Habit.find();
        return res.json(habits);
    }

    public async getHabit(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const habit = await Habit.findById(id);
        if (!habit) {
            return res.status(404).json({ message: 'Habit not found' });
        }
        return res.json(habit);
    }
}