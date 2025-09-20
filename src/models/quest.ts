export interface Quest {
    id: string;
    title: string;
    description: string;
    completionStatus: boolean;
    difficulty: number; // 1 to 5 scale
    createdAt: Date;
    updatedAt: Date;
    userId: string; // Reference to the user who created the quest
}

export class QuestModel {
    constructor(public quest: Quest) {}

    markAsCompleted() {
        this.quest.completionStatus = true;
        this.quest.updatedAt = new Date();
    }

    updateQuest(title: string, description: string, difficulty: number) {
        this.quest.title = title;
        this.quest.description = description;
        this.quest.difficulty = difficulty;
        this.quest.updatedAt = new Date();
    }
}