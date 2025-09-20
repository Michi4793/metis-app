import { Habit } from '../models/habit';
import { User } from '../models/user';
import { Goal } from '../models/goal';

export class AIService {
    static adjustTasks(user: User, habits: Habit[], longTermGoals: Goal[]): Habit[] {
        // Logic to adjust tasks based on user progress and long-term goals
        return habits.map(habit => {
            // Example adjustment logic
            if (user.streaks[habit.id] > 5) {
                habit.difficulty = Math.max(1, habit.difficulty - 1); // Make it easier
            } else if (user.streaks[habit.id] < 3) {
                habit.difficulty += 1; // Make it harder
            }
            return habit;
        });
    }

    static recommendTasks(user: User, habits: Habit[]): Habit[] {
        // Logic to recommend tasks based on user preferences and history
        return habits.filter(habit => habit.difficulty <= user.skillLevel);
    }
}