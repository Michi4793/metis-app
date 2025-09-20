export interface JournalEntry {
    id: string;
    userId: string;
    content: string;
    date: Date;
}

export class Journal {
    private entries: JournalEntry[] = [];

    constructor() {}

    public addEntry(userId: string, content: string): JournalEntry {
        const newEntry: JournalEntry = {
            id: this.generateId(),
            userId,
            content,
            date: new Date(),
        };
        this.entries.push(newEntry);
        return newEntry;
    }

    public getEntriesByUser(userId: string): JournalEntry[] {
        return this.entries.filter(entry => entry.userId === userId);
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}