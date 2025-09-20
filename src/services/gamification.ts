import { Habit } from '../models/habit';
import { User } from '../models/user';

interface GamificationData {
    level: number;
    experience: number;
    rank: string;
}

export class GamificationService {
    private userGamificationData: Map<string, GamificationData> = new Map();

    constructor() {}

    initializeUser(userId: string): void {
        if (!this.userGamificationData.has(userId)) {
            this.userGamificationData.set(userId, {
                level: 1,
                experience: 0,
                rank: 'Novice'
            });
        }
    }

    updateExperience(userId: string, points: number): void {
        const data = this.userGamificationData.get(userId);
        if (data) {
            data.experience += points;
            this.checkLevelUp(userId);
        }
    }

    private checkLevelUp(userId: string): void {
        const data = this.userGamificationData.get(userId);
        if (data) {
            const requiredExperience = this.getExperienceForLevel(data.level + 1);
            if (data.experience >= requiredExperience) {
                data.level++;
                this.updateRank(userId);
            }
        }
    }

    private updateRank(userId: string): void {
        const data = this.userGamificationData.get(userId);
        if (data) {
            if (data.level < 5) {
                data.rank = 'Novice';
            } else if (data.level < 10) {
                data.rank = 'Intermediate';
            } else {
                data.rank = 'Expert';
            }
        }
    }

    private getExperienceForLevel(level: number): number {
        return level * 100; // Example: 100 points needed for each level
    }

    getUserGamificationData(userId: string): GamificationData | undefined {
        return this.userGamificationData.get(userId);
    }

    adjustTasksBasedOnProgress(userId: string, habits: Habit[]): Habit[] {
        // AI logic to adjust tasks based on user progress and long-term goals
        // Placeholder for AI adjustment logic
        return habits;
    }
}