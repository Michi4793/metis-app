import { v4 as uuidv4 } from 'uuid';

export interface User {
    id: string;
    username: string;
    email: string;
    profilePicture?: string;
    friends: string[];
    clubs: string[];
    longTermGoals: string[];
    streaks: Record<string, number>;
    journalEntries: string[];
    createdAt: Date;
    updatedAt: Date;
}

export class UserModel {
    id: string;
    username: string;
    email: string;
    profilePicture?: string;
    friends: string[];
    clubs: string[];
    longTermGoals: string[];
    streaks: Record<string, number>;
    journalEntries: string[];
    createdAt: Date;
    updatedAt: Date;

    constructor(username: string, email: string) {
        this.id = uuidv4();
        this.username = username;
        this.email = email;
        this.friends = [];
        this.clubs = [];
        this.longTermGoals = [];
        this.streaks = {};
        this.journalEntries = [];
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    updateProfile(profileData: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>) {
        Object.assign(this, profileData);
        this.updatedAt = new Date();
    }

    addFriend(friendId: string) {
        if (!this.friends.includes(friendId)) {
            this.friends.push(friendId);
        }
    }

    removeFriend(friendId: string) {
        this.friends = this.friends.filter(friend => friend !== friendId);
    }

    addClub(clubId: string) {
        if (!this.clubs.includes(clubId)) {
            this.clubs.push(clubId);
        }
    }

    removeClub(clubId: string) {
        this.clubs = this.clubs.filter(club => club !== clubId);
    }

    addLongTermGoal(goalId: string) {
        if (!this.longTermGoals.includes(goalId)) {
            this.longTermGoals.push(goalId);
        }
    }

    removeLongTermGoal(goalId: string) {
        this.longTermGoals = this.longTermGoals.filter(goal => goal !== goalId);
    }

    addJournalEntry(entry: string) {
        this.journalEntries.push(entry);
    }
}