import { Router } from 'express';
import { ClubsController } from '../controllers/clubs';

const router = Router();
const clubsController = new ClubsController();

// Route to create a new club
router.post('/', clubsController.createClub.bind(clubsController));

// Route to join a club
router.post('/:clubId/join', clubsController.joinClub.bind(clubsController));

// Route to leave a club
router.post('/:clubId/leave', clubsController.leaveClub.bind(clubsController));

// Route to get all clubs
router.get('/', clubsController.getAllClubs.bind(clubsController));

// Route to get a specific club by ID
router.get('/:clubId', clubsController.getClubById.bind(clubsController));

// Route to get members of a specific club
router.get('/:clubId/members', clubsController.getClubMembers.bind(clubsController));

export default router;