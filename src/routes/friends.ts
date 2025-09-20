import { Router } from 'express';
import { FriendsController } from '../controllers/friends';

const router = Router();
const friendsController = new FriendsController();

// Route to add a friend
router.post('/add', friendsController.addFriend);

// Route to remove a friend
router.delete('/remove/:id', friendsController.removeFriend);

// Route to get friends list
router.get('/', friendsController.getFriendsList);

export default router;