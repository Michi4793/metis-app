export interface User {
    id: string;
    username: string;
    email: string;
    profilePicture?: string;
    friends: string[];
    clubs: string[];
    goals: string[];
    journalEntries: string[];
}

export interface Habit {
    id: string;
    name: string;
    difficulty: 'easy' | 'medium' | 'hard';
    streak: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Club {
    id: string;
    name: string;
    members: string[];
    activities: string[];
}

export interface Goal {
    id: string;
    title: string;
    description: string;
    completionStatus: boolean;
    userId: string;
}

export interface Journal {
    id: string;
    content: string;
    date: Date;
    userId: string;
}

export interface Quest {
    id: string;
    title: string;
    description: string;
    completionStatus: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}