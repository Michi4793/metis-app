export class ClubsController {
    private clubs: Club[] = [];

    public createClub(name: string, creatorId: string): Club {
        const newClub: Club = {
            id: this.generateId(),
            name,
            members: [creatorId],
            activities: []
        };
        this.clubs.push(newClub);
        return newClub;
    }

    public joinClub(clubId: string, userId: string): Club | null {
        const club = this.clubs.find(club => club.id === clubId);
        if (club && !club.members.includes(userId)) {
            club.members.push(userId);
            return club;
        }
        return null;
    }

    public leaveClub(clubId: string, userId: string): Club | null {
        const club = this.clubs.find(club => club.id === clubId);
        if (club) {
            club.members = club.members.filter(member => member !== userId);
            return club;
        }
        return null;
    }

    public getClubs(): Club[] {
        return this.clubs;
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}

interface Club {
    id: string;
    name: string;
    members: string[];
    activities: string[];
}