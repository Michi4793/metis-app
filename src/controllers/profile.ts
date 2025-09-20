import { Request, Response } from 'express';
import { User } from '../models/user';

export class ProfileController {
    // Method to view user profile
    public async viewProfile(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        try {
            const userProfile = await User.findById(userId);
            if (!userProfile) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(userProfile);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving profile', error });
        }
    }

    // Method to update user profile
    public async updateProfile(req: Request, res: Response): Promise<void> {
        const userId = req.params.id;
        const updatedData = req.body;
        try {
            const updatedProfile = await User.findByIdAndUpdate(userId, updatedData, { new: true });
            if (!updatedProfile) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.status(200).json(updatedProfile);
        } catch (error) {
            res.status(500).json({ message: 'Error updating profile', error });
        }
    }
}