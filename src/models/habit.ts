export interface Habit {
    id: string;
    name: string;
    difficulty: 'easy' | 'medium' | 'hard';
    streak: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string; // Reference to the user who owns the habit
    longTermGoalId?: string; // Optional reference to a long-term goal
}