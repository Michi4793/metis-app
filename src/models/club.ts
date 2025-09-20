export interface Club {
    id: string;
    name: string;
    members: string[]; // Array of user IDs
    activities: string[]; // Array of activity descriptions
    createdAt: Date;
    updatedAt: Date;
}