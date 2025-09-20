export class FriendsController {
    private friends: string[];

    constructor() {
        this.friends = [];
    }

    addFriend(friendId: string): string {
        if (!this.friends.includes(friendId)) {
            this.friends.push(friendId);
            return `${friendId} has been added as a friend.`;
        }
        return `${friendId} is already your friend.`;
    }

    removeFriend(friendId: string): string {
        const index = this.friends.indexOf(friendId);
        if (index > -1) {
            this.friends.splice(index, 1);
            return `${friendId} has been removed from your friends.`;
        }
        return `${friendId} is not in your friends list.`;
    }

    listFriends(): string[] {
        return this.friends;
    }
}